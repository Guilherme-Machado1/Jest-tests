import { CartItem } from './intefaces/cart-item';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
