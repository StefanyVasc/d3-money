import { Warning } from '@phosphor-icons/react'
import { EmptyContainer } from './styles'

export function EmptyTable() {
  return (
    <EmptyContainer>
      <span>Ainda não há transações cadastradas!</span>
      <Warning size={32} />
    </EmptyContainer>
  )
}
