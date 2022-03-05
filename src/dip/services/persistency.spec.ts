import { Persistency } from './persistency';
describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());
  it('Should return undefined', () => {
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = new Persistency();
    const spyON = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(spyON).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log com o que eu quero', () => {
    const sut = new Persistency();
    const spyON = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(spyON).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
