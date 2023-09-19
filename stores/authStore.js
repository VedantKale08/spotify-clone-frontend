import {create} from 'zustand'

export const authStore = create((set) => ({
  loginPopup: false,
  setLoginPopup: (data) => set(() => ({ loginPopup: data })),
  registerPopup: false,
  setRegisterPopup: (data) => set(() => ({ registerPopup: data })),
}));