import { useMemo } from 'react'
import { TransactionsContext } from '../contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  /* useContextSelector evita renderizaçoes desnecessarias
  quando um valor não selecionado da Context API tenha sido
  alterado */
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  // a variavel summary só será recriada quando o transactions mudar
  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += transaction.price
        } else {
          acc.outcome += transaction.price
          acc.total -= transaction.price
        }

        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])

  return summary
}
