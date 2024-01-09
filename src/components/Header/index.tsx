import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'

export function Header() {
  const [isTransactionModalOpen, setTransactionModalOpen] =
    useState<boolean>(false)

  function handleTransactionModalOpenChange(value: boolean) {
    setTransactionModalOpen(value)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root
          open={isTransactionModalOpen}
          onOpenChange={handleTransactionModalOpenChange}
        >
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal
            handleTransactionModalOpenChange={handleTransactionModalOpenChange}
          />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
