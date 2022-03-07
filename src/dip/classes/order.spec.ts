/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { CartItem } from './intefaces/cart-item';
import { CustomerOrder } from './intefaces/customer-protocol';
import { MessagingProtocol } from './intefaces/messaging-protocol';
import { PersistencyProtocol } from './intefaces/persistency-protocol';
import { ShoppingCartProtocol } from './intefaces/shopping-cart-protocol';
import { Order } from './order';

class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<CartItem[]> {
    return [];
  }

  addItem(item: CartItem): void {}

  removeItem(index: number): void {}
  total(): number {
    return 1;
  }
  totalWithDicount(): number {
    return 1;
  }

  isEmpty(): boolean {
    return false;
  }

  clear(): void {}
}

class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder(): void {}
}

class CustomerMock implements CustomerOrder {
  getName(): string {
    return '';
  }
  getIDN(): string {
    return '';
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messaginMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(
    shoppingCartMock,
    messaginMock,
    persistencyMock,
    customerMock,
  );

  return {
    sut,
    shoppingCartMock,
    messaginMock,
    persistencyMock,
  };
};
describe('Order', () => {
  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(true);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  });

  it('should checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(false);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  });

  it('should send message', () => {
    const { sut, messaginMock } = createSut();
    const messaginMockSpy = jest.spyOn(messaginMock, 'sendMessage');
    sut.checkout();
    expect(messaginMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sut, persistencyMock } = createSut();
    const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');
    sut.checkout();
    expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should clear Cart', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  });
});
