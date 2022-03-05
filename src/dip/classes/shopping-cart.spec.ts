import { Discount, FiftyPercentDiscount } from './discount';
import { CartItem } from './intefaces/cart-item';
import { ShoppingCart } from './shopping-cart';
const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends FiftyPercentDiscount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }
  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem = createCartItem('Camiseta', 40);
  const cartItem2 = createCartItem('Tenis', 60);
  sut.addItem(cartItem);
  sut.addItem(cartItem2);
  return { sut, discountMock };
};
describe('ShoppingCart', () => {
  it('should be an empty cart when no product id added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  //Aqui é eu tentando fazer alguns testes
  it('should return the sum between those products', () => {
    const { sut } = createSut();
    const cartItem = createCartItem('Camiseta', 40);
    const cartItem2 = createCartItem('Tenis', 60);
    sut.addItem(cartItem);
    sut.addItem(cartItem2);
    expect(sut.total()).toBe(100);
  });

  it('should return the sum between those products with the discount', () => {
    const { sut } = createSutWithProducts();
    expect(sut.totalWithDicount()).toBe(50);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products from cart', () => {
    const { sut } = createSutWithProducts();
    sut.removeItem(1);
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });
});
