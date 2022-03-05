import { Product } from './product';
const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};
describe('Product', () => {
  afterEach(() => jest.clearAllMocks());
  it('Should have properties', () => {
    const sut = createSut('Camiseta', 59);
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut).toHaveProperty('price', 59);
  });
});
