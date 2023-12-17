import {create} from "zustand";

export const useStore = create((set) => ({
    isOpenModal: false,
    setIsOpenModal:() => set(state => ({ isOpenModal: true })),
    setIsCloseModal:() => set(state => ({ isOpenModal: false })),
}))

