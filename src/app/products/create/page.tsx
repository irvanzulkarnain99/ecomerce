"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js 13+ -> Gunakan next/navigation


export default function CreateProduct() {
  const [product, setProduct] = useState({
    sku        : "",
    title      : "",
    price      : "",
    description: "",
    image      : "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product Data:", product);
    // TODO: Kirim data ke backend / API

    const response = await fetch("http://192.168.100.7:3001/create-products", {
      method : "POST",
      headers: { "Content-Type": "application/json" },
      body   : JSON.stringify(product),
    });

    if (response.status == 201) {
      alert("Produk berhasil ditambahkan!");
      setProduct({
        sku        : "",
        title      : "",
        price      : "",
        description: "",
        image      : "",
      });
      router.push("/products");
    } else {
      alert("Gagal menambahkan produk.");
    }
  };

  return (
    <div  className = "max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow">
    <h2   className = "text-2xl font-bold mb-4">Add Product</h2>
    <form onSubmit  = {handleSubmit} className = "space-y-4">
        {/* SKU */}
        <div>
          <label className = "block text-gray-700">SKU</label>
          <input
            type      = "text"
            name      = "sku"
            value     = {product.sku}
            onChange  = {handleChange}
            className = "w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        {/* Title Produk */}
        <div>
          <label className = "block text-gray-700">Title</label>
          <input
            type      = "text"
            name      = "title"
            value     = {product.title}
            onChange  = {handleChange}
            className = "w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        {/* Harga */}
        <div>
          <label className = "block text-gray-700">Price</label>
          <input
            type      = "number"
            name      = "price"
            value     = {product.price}
            onChange  = {handleChange}
            className = "w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        {/* Deskripsi */}
        <div>
          <label className = "block text-gray-700">Description</label>
          <textarea
            name      = "description"
            value     = {product.description}
            onChange  = {handleChange}
            className = "w-full p-2 border border-gray-300 rounded mt-1"
            required
          ></textarea>
        </div>

        {/* URL Gambar */}
        <div>
          <label className = "block text-gray-700">Image URL</label>
          <input
            type      = "text"
            name      = "image"
            value     = {product.image}
            onChange  = {handleChange}
            className = "w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        {/* Submit Button */}
        <button type = "submit" className = "w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Save
        </button>
      </form>
    </div>
  );
}
