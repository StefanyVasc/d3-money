import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  overflow-y: hidden;
  max-height: 680px;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  tbody {
    height: 680px;
    overflow-y: auto;
    display: block;

    scrollbar-width: thin;
    scrollbar-color: #888 ${({ theme }) => theme.colors['gray-900']};

    &::-webkit-scrollbar {
      width: 10px;
      background-color: ${({ theme }) => theme.colors['gray-900']};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors['gray-700']};
      border-radius: 5px;
    }
  }

  td {
    padding: 1.25rem 2rem;
    background-color: ${({ theme }) => theme.colors['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ theme, variant }) =>
    variant === 'income' ? theme.colors['green-300'] : theme.colors['red-300']};
`
