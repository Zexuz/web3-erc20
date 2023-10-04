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
  contractAddress: "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05",
  setContractAddress: (contractAddress) => set({ contractAddress }),
  receiverAddress: "0xddc2f17daCb8187AC0e26e6Bd852Ee3212684b81",
  setReceiverAddress: (receiverAddress) => set({ receiverAddress }),
  amount: 0,
  setAmount: (amount) => set({ amount }),
}));
