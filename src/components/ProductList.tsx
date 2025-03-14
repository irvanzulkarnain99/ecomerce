"use client";
import { useEffect } from "react";
import { useProductStore } from "../store/productStore";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductList = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 auto-rows-fr">
      {products.map((product) => (  
        <Card key={product.id} className="border p-4 rounded-lg shadow-md">
            <CardContent className="p-4">
                <img src={product.image} alt={product.title} width={250} height={250} className="rounded-lg" />
                <h2 className="text-lg font-bold mt-2">{product.sku}</h2>
                <h2 className="text-lg font-semibold text-gray-800 mt-2">{product.title}</h2>
                <p className="text-green-500 font-semibold">${product.price}</p>
                {/* <p className="text-black-500 font-semibold">Stock : {product.stock}</p> */}
            </CardContent>
        </Card>
      ))}
    </div>
    
  );
};

export default ProductList;