import { Messaging } from './messaging';
const createSut = () => {
  return new Messaging();
};
describe('Message', () => {
  afterEach(() => jest.clearAllMocks());
  it('Should return undefined', () => {
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = createSut();
    const spyON = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(spyON).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log com o que eu quero', () => {
    const sut = createSut();
    const spyON = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(spyON).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
});
