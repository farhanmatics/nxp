"use client"

import { useStoreModel } from "@/hooks/user-store-modal"
import { Modal } from "@/components/ui/modal"

export const StoreModal = () => {
  const storeModal = useStoreModel();

  return(
    <Modal
      title="Create Your Partner"
      description="Please provide informaiton of your partner"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Open your partner account
    </Modal>
  )
}