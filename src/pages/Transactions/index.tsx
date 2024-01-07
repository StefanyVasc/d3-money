// import { Header } from "../../components/Header";
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function TransactionsPage() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer className="container AAAA">
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Carro quebrou</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 1.000,00</PriceHighlight>
              </td>
              <td>Emergência</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
