import {create} from 'zustand'

export const useUserStore = create((set) => ({
  user: {
    name: '',
    email: '',
    photo: '',
  },
  setUser: (user) => set({user}),
}))