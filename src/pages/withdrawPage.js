import React from "react";
import { useSelector, useDispatch } from "react-redux";

function WithdrawPage() {
  const balance = useSelector(state => state.balance);
  const dispatch = useDispatch();
  function onWithdrawHandle() {
    dispatch({ type: "WITHDRAW", payload: 10 });
  }
  return (
    <div>
      <h1>Balance: {balance}</h1>
      <button onClick={onWithdrawHandle}>Withdraw</button>
    </div>
  );
}
export default WithdrawPage;
