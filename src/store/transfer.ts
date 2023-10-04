import { create } from "zustand";

interface TransferStore {
  contractAddress: string;
  setContractAddress: (contractAddress: string) => void;
  receiverAddress: string;
  setReceiverAddress: (receiverAddress: string) => void;
  amount: number;
  setAmount: (amount: number) => void;
}

export const useTransferStore = create<TransferStore>((set) => ({
  contractAddress: "",
  setContractAddress: (contractAddress) => set({ contractAddress }),
  receiverAddress: "",
  setReceiverAddress: (receiverAddress) => set({ receiverAddress }),
  amount: 0,
  setAmount: (amount) => set({ amount }),
}));
