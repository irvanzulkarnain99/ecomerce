"use client";

import { useEffect } from "react";
import { useAdjustmentTransactionStore } from "@/store/adjustmentTransactionStore";
import AdjustmentTransactionList from "@/components/AdjustmentTransactionList";

export default function AdjustmentTransactions() {
  const { fetchAdjustmentTransactions } = useAdjustmentTransactionStore();

  useEffect(() => {
    // Simulasi fetch produk
    fetchAdjustmentTransactions();
    
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Adjutment Transaction List</h1>
      <AdjustmentTransactionList />
    </div>
  );
}