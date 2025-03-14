import { create } from 'zustand';

interface CartState {
  items: { id: string; title: string; price: number; quantity: number }[];
  addItem: (item: { id: string; title: string; price: number }) => void;
  removeItem: (id: string) => void;
}

export const useStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));
