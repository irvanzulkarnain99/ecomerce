import { create } from "zustand";

interface AdjustmentTransaction {
  id              : number;
  sku             : string;
  qty             : number;
  transaction_date: string;
}

interface AdjustmentTransactionStore {
  adjustmenttransactions     : AdjustmentTransaction[];
  fetchAdjustmentTransactions: () => Promise<void>;
  setAdjustmentTransactions  : (adjustmenttransactions: AdjustmentTransaction[]) => void;
}

export const useAdjustmentTransactionStore = create<AdjustmentTransactionStore>((set) => ({
  adjustmenttransactions     : [],
  setAdjustmentTransactions  : (adjustmenttransactions) => set({ adjustmenttransactions }),
  fetchAdjustmentTransactions: async () => {
    try {
        const res  = await fetch("http://192.168.100.7:3001/get-adjustment-transaction");
        const data = await res.json();
        set({ adjustmenttransactions: data });
    } catch (error) {
        console.error("Fetch error:", error);
    }
  },
}));