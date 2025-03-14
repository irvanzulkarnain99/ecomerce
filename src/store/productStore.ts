import { create } from "zustand";

interface Product {
  id   : number;
  title: string;
  price: number;
  image: string;
}

interface ProductStore {
  products     : Product[];
  fetchProducts: () => Promise<void>;
  setProducts  : (products: Product[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products     : [],
  setProducts  : (products) => set({ products }),
  fetchProducts: async () => {
    try {
        const res  = await fetch("http://192.168.100.7:3001/get-products");
        const data = await res.json();
        console.log("Fetched Products:", data);
        set({ products: data });
    } catch (error) {
        console.error("Fetch error:", error);
    }
  },
}));