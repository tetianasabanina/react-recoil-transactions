import React from "react";
import { useRecoilState } from "recoil";
import { transactionListState } from "../recoil/atoms";
import { removeItemAtIndex } from "../utils";
import { T_Transaction, T_TransactionProps } from "../types";

export const Transaction = ({
  transaction,
}: {
  transaction: T_Transaction;
}) => {
  const [transactionList, setTransactionList] =
    useRecoilState(transactionListState);
  const index = transactionList.findIndex(
    (listItem) => listItem === transaction
  );

  const removeTransaction = () => {
    const newList = removeItemAtIndex(transactionList, index);
    setTransactionList(newList);
  };

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}€{Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={removeTransaction}>
        x
      </button>
    </li>
  );
};
