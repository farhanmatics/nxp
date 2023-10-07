import {create} from 'zustand';

interface useStoreModalinterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;

};

export const useStoreModel = create<useStoreModalinterface>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({isOpen: false })
}))