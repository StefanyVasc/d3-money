import styled from 'styled-components'

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15rem auto;
  width: 100%;

  span {
    margin-bottom: 1.25rem;
    color: ${({ theme }) => theme.colors['gray-400']};
    font-size: 1.2rem;
  }

  svg {
    fill: ${({ theme }) => theme.colors['gray-400']};
  }
`
