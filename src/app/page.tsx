import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800">🛒 Welcome to E-Commerce</h1>
      <p className="text-gray-600 mt-2">Find the best Products for you!</p>
    </div>
  );
}