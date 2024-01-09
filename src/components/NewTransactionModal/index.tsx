import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import * as zod from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionContext'

interface NewTransactionModalProps {
  handleTransactionModalOpenChange: (status: boolean) => void
}

const NewTransactionModalSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

type NewTransactionModalInputs = zod.infer<typeof NewTransactionModalSchema>

export function NewTransactionModal({
  handleTransactionModalOpenChange,
}: NewTransactionModalProps) {
  const createTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransactions
    },
  )

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionModalInputs>({
    resolver: zodResolver(NewTransactionModalSchema),
    defaultValues: {
      type: 'income',
    },
  })

  async function handleCreateNewTransaction(data: NewTransactionModalInputs) {
    const { description, price, category, type } = data

    await createTransactions({
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })
    reset()
    handleTransactionModalOpenChange(false)
  }

  return (
    /* Portal é uma forma de renderizar um elemento filho dentro de um nó
    DOM que existe fora da hierarquia do componente pai. */
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          {/* Controller é usado para adicionar comportamentos de formulário a
          inputs personalizados, que não são nativos do HTML, onde há diferentes
          formas de recuperar e alterar o seu valor */}
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
