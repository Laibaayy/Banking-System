import { useReducer } from "react";
import "./App.css";
import Content from "./Components/Content";
import OpenAccount from "./Components/OpenAccount";
import Deposit from "./Components/Deposit";
import Withdraw from "./Components/Withdraw";
import ReqLoan from "./Components/ReqLoan";
import PayLoan from "./Components/PayLoan";
import CloseAccount from "./Components/CloseAccount";

const initialstate = {
  balance: 0,
  loan: 0,
  status: "closed",
  isActive: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "OpenAccount":
      return {
        ...state,
        status: "open",
        balance: action.payload,
        isActive: true,
      };
    case "Deposit":
      return {
        ...state,
        status: "deposit",
        balance: state.balance + action.payload,
      };
    case "withdraw":
      return {
        ...state,
        status: "withdraw",
        balance: state.balance - action.payload,
      };
    case "ReqLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        status: "Request",
        loan: state.loan + action.payload,
        balance: state.balance + action.payload,
      };
    case "PayLoan":
      return {
        ...state,
        status: "Pay",
        loan: 0,
        balance: state.balance - state.loan,
      };
    case "CloseAccount":
      if (state.balance !== 0 || state.loan > 0) return state;
      return { ...initialstate };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const { balance, loan, status, isActive } = state;
  return (
    <div className="App">
      <h1>Banking System</h1>
      <Content balance={balance} loan={loan} />
      <OpenAccount dispatch={dispatch} isActive={isActive} />
      <Deposit dispatch={dispatch} isActive={isActive} />
      <Withdraw dispatch={dispatch} isActive={isActive} />
      <ReqLoan dispatch={dispatch} isActive={isActive} />
      <PayLoan dispatch={dispatch} isActive={isActive} />
      <CloseAccount dispatch={dispatch} isActive={isActive} />
    </div>
  );
}

export default App;
