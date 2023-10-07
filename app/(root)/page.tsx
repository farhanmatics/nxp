"use client"
import { Modal } from "@/components/ui/modal"
import { useStoreModel } from "@/hooks/user-store-modal"
import { UserButton } from "@clerk/nextjs"

import {useEffect} from 'react'


export default function Home() {
  const isOpen = useStoreModel((state) => state.isOpen)
  const onOpen = useStoreModel((state) => state.onOpen)

  useEffect(() => {
    if(!isOpen){
      onOpen()
    }
  }, [isOpen, onOpen])

  return (
    <div className="p-4">
      Root page
    </div>
    
  )
}
