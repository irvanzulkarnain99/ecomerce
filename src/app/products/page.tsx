"use client";

import { useEffect } from "react";
import { useProductStore } from "@/store/productStore";
import ProductList from "@/components/ProductList";


export default function Products() {
  const { fetchProducts } = useProductStore();

  useEffect(() => {
    // Simulasi fetch produk
    fetchProducts();
    
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Products List</h1>
      <a className="btn btn-primary" href="/products/create">Add Product</a>
      <ProductList />
    </div>
  );
}