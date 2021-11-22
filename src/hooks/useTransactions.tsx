import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "deposit" | "withdraw";
  category: string;
  created_at: string;
}

type TransactionInput = Omit<Transaction, "id" | "created_at">;

interface TransactionsProviderProps {
  children: ReactNode;
}

const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("transactions", {
      ...transactionInput,
      created_at: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ createTransaction, transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactions = () => useContext(TransactionsContext);
