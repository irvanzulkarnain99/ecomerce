"use client";
import { useEffect } from "react";
import { useAdjustmentTransactionStore } from "../store/adjustmentTransactionStore";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdjustmenTransactionList = () => {
  console.log("Fetching adjustmenttransactions... test");
  const { adjustmenttransactions, fetchAdjustmentTransactions } = useAdjustmentTransactionStore();

  useEffect(() => {
    console.log("Fetching adjustmenttransactions...");
    fetchAdjustmentTransactions();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 auto-rows-fr">
      {adjustmenttransactions.map((adjustmenttransaction) => (  
        <Card key={adjustmenttransaction.id} className="border p-4 rounded-lg shadow-md">
            <CardContent className="p-4">
                <h2 className="text-lg font-bold mt-2">SKU : {adjustmenttransaction.sku}</h2>
                <h2 className="text-lg font-semibold text-gray-800 mt-2">Qty : {adjustmenttransaction.qty}</h2>
                <p className="text-lg font-semibold text-gray-800 mt-2">Transaction Date : {adjustmenttransaction.transaction_date}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4">
                <Button variant="default">View Details</Button>
            </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AdjustmenTransactionList;