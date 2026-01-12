import {Product} from "./product";

export interface ItemCart {
  id: number;
  item: Product & { quantity: number };
}