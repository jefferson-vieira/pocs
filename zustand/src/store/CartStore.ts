import { create } from "zustand";

interface Product {
  id: number;
  name: string;
  price: number;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 499.99,
  },
  {
    id: 3,
    name: "Headphones",
    price: 89.99,
  },
  {
    id: 4,
    name: "Keyboard",
    price: 49.99,
  },
  {
    id: 5,
    name: "Mouse",
    price: 29.99,
  },
];

interface CartStore {
  products: Product[];
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

const useCartStore = create<CartStore>((set) => {
  return {
    products: PRODUCTS,
    cart: [],
    addToCart: (product) =>
      set((state) => ({
        cart: [...state.cart, product],
        products: state.products.toSpliced(state.products.indexOf(product), 1),
      })),
    removeFromCart: (product) =>
      set((state) => ({
        cart: state.cart.toSpliced(state.cart.indexOf(product), 1),
        products: [...state.products, product],
      })),
  };
});

export { useCartStore };
