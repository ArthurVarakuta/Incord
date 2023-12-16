import {create} from "zustand";

const useStore = create((set) => ({
    isOpenModal: false,
    setIsOpenModal: (value) => set({isOpenModal: value}),
}))