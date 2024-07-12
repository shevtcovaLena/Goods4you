import { ICartItem } from "../types/types";

export const getProductsTable = (products: ICartItem[]) => {
    const tab: Record<string, number> = {};
    products.forEach(item => {
        tab[String(item.id)] = item.quantity;
      });    
      return tab;
}