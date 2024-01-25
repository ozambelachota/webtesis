import { create } from "zustand";

export const btnStore = create((set) => ({
  type: false,
  tesista: {
    nombre: "",
    apellido: "",
    dni: "",
    celular: "",
    email: "",
  },
  setType: (type) => set({ type }),
}));
