import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { transfer } from "../services/web3/erc20.ts";
import { validateAmount, validateEthereumAddress } from "../lib/validation.ts";

interface TransferStore {
  contractAddress: string;
  setContractAddress: (contractAddress: string) => void;
  receiverAddress: string;
  setReceiverAddress: (receiverAddress: string) => void;
  amount: number;
  setAmount: (amount: number) => void;
  nrOrTransfers: number;
  transfer: (transactionSentCallback: () => void) => Promise<void>;
  isValid: boolean;
}

const validateAll = (
  amount: number,
  receiverAddress: string,
  contractAddress: string,
) => {
  return (
    validateAmount(amount.toString()).isValid &&
    validateEthereumAddress(receiverAddress).isValid &&
    validateEthereumAddress(contractAddress).isValid
  );
};

export const useTransferStore = create<TransferStore>(
  persist<TransferStore>(
    (set, get) => ({
      contractAddress: "",
      setContractAddress: (contractAddress) => {
        set({
          contractAddress,
          isValid: validateAll(
            get().amount,
            get().receiverAddress,
            contractAddress,
          ),
        });
      },
      receiverAddress: "",
      setReceiverAddress: (receiverAddress) => {
        set({
          receiverAddress,
          isValid: validateAll(
            get().amount,
            receiverAddress,
            get().contractAddress,
          ),
        });
      },
      amount: 0,
      setAmount: (amount) => {
        set({
          amount,
          isValid: validateAll(
            amount,
            get().receiverAddress,
            get().contractAddress,
          ),
        });
      },
      nrOrTransfers: 0,
      isValid: true,
      transfer: async (transactionSentCallback: () => void) => {
        const tx = await transfer(
          get().contractAddress,
          get().receiverAddress,
          get().amount,
        );

        transactionSentCallback();

        await tx.wait();

        set((state) => ({ nrOrTransfers: state.nrOrTransfers + 1 }));
      },
    }),
    {
      name: "transfer-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ) as never,
);
