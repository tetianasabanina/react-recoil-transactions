export type T_Transaction = {
  id: string | null;
  amount: number;
  text: string;
};

export type T_TransactionProps = {
  transaction: T_Transaction;
};
