import React, { useEffect } from "react";
import { Transaction } from "./Transaction";
import { transactionListState } from "../recoil/atoms";
import { useRecoilState } from "recoil";

export const TransactionList = () => {
  // const transactionList = useRecoilValue(transactionListState);
  const [transactionList, setTransactionList] =
    useRecoilState(transactionListState);

  useEffect(() => {
    if (localStorage.getItem("TRANSACTION_LIST") !== null)
      setTransactionList(JSON.parse(localStorage.getItem("TRANSACTION_LIST")!));
  }, [setTransactionList]);

  return (
    <>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactionList !== null
          ? transactionList.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))
          : null}
      </ul>
    </>
  );
};
