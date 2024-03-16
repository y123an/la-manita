import { create } from "zustand";
import { persist } from "zustand/middleware";

const siteStore = (set, get) => ({
  cart: [],
  addToCart: (id) => {
    if (get().cart.find((item) => item.id === id)) {
      set({
        cart: get().cart.map((item) => {
          if (item.id === id) {
            item.quntity = item.quntity + 1;
          }

          return item;
        }),
      });
    } else {
      set({
        cart: [
          ...get().cart,
          {
            id: id,
            quntity: 1,
          },
        ],
      });
    }
  },
});

export const useSiteStore = create(
  persist(siteStore, {
    name: "site-store",
  })
);
