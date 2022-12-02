import React, { useState, useEffect, SetStateAction } from "react";
import { transactionListState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const NewTransaction = () => {
  const [textValue, setTextValue] = useState("");
  const [amount, setAmount] = useState(0);
  // const setTransactionList = useRecoilState(transactionListState);
  const [transactionList, setTransactionList] =
    useRecoilState(transactionListState);

  const NewTransaction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setTransactionList((oldTransactionList) => [
      ...oldTransactionList,
      {
        id: uuidv4(),
        amount: +amount,
        text: textValue,
      },
    ]);
    setTextValue("");
    setAmount(0);
  };

  useEffect(() => {
    localStorage.setItem("TRANSACTION_LIST", JSON.stringify(transactionList));
  }, [transactionList]);

  const handleTextValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };
  const handleAmount = (e: any) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div>
          <label htmlFor="text">Description</label>
          <input value={textValue} onChange={handleTextValue} />
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input value={amount} onChange={handleAmount} />
        </div>
        <button className="btn" onClick={NewTransaction}>
          Add transaction
        </button>
      </form>
    </>
  );
};
