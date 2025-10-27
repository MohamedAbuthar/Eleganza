// src/types/product.ts
export interface Product {
  id: string;
  category: string;
  title: string;
  price: number;
  image: string;
  createdAt: Date;
  isActive: boolean;
}