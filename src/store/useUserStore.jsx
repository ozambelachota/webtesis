import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: {
    username: "",
    email: "",
    photo: "",
  },
  setUser: (user) => set({ user }),
}));
