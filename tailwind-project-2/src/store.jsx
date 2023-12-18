import {create} from "zustand";

export const useModal = create((set) => ({
    modalActive: false,
    setOpenModal:() => set(state => ({ modalActive: true })),
    setCloseModal:() => set(state => ({ modalActive: false })),
}))