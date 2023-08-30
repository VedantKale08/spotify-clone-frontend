import { create } from "zustand";

export const userStore = create((set) => ({
  user: [],
  setUser: (data) => set(() => ({ user: data })),
  token: null,
  setToken: (data) => set(() => ({ token: data })),
}));
