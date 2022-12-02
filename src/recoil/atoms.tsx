import { atom } from "recoil";
import { T_Transaction } from "../types";

export const transactionListState = atom<T_Transaction[]>({
  key: "transactionListState",
  default: [],
});
