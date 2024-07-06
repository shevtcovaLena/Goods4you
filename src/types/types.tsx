export interface IItem {
    id: number;
    name: string;
    price: number;
    currency: string;
    image: string;
    count?: number;
    catalogCount?: number;
  }