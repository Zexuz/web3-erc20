import { create } from "zustand";

interface UserStore {
  address: string;
  setAddress: (address: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  address: "",
  setAddress: (address) => set({ address }),
}));
