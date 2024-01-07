import { Route, Routes } from "react-router-dom";
import { TransactionsPage } from "./pages/Transactions";

export function Router(){
  return(
    <Routes>
        <Route path="/" element={<TransactionsPage />}/>
    </Routes>
  )
}