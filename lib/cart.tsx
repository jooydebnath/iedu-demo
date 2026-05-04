"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  qty: number;
  cover?: string;
  emoji?: string;
  author?: string;
  type?: "physical" | "digital";
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "iedu_cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {}
    setHydrated(true);
  }, []);

  // Persist on change (after hydration to avoid clobbering)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, hydrated]);

  const add = useCallback(
    (item: Omit<CartItem, "qty">, qty: number = 1) => {
      setItems((curr) => {
        const existing = curr.find((c) => c.id === item.id);
        if (existing) {
          return curr.map((c) =>
            c.id === item.id ? { ...c, qty: c.qty + qty } : c
          );
        }
        return [...curr, { ...item, qty }];
      });
    },
    []
  );

  const remove = useCallback((id: string) => {
    setItems((curr) => curr.filter((c) => c.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setItems((curr) =>
      curr
        .map((c) => (c.id === id ? { ...c, qty: Math.max(1, qty) } : c))
        .filter((c) => c.qty > 0)
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count: items.reduce((s, c) => s + c.qty, 0),
      subtotal: items.reduce((s, c) => s + c.price * c.qty, 0),
      add,
      remove,
      setQty,
      clear,
    }),
    [items, add, remove, setQty, clear]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
