import { Customer, CompanyCustomer } from './customer';

const createindividualCustomer = (
  firsName: string,
  lastName: string,
  cpf: string,
): Customer => {
  return new Customer(firsName, lastName, cpf);
};

const createCompanyCustomer = (name: string, cnpj: string): CompanyCustomer => {
  return new CompanyCustomer(name, cnpj);
};
describe('Individual', () => {
  afterEach(() => jest.clearAllMocks());
  it('Should have parameters', () => {
    const sut = createindividualCustomer('Teste', 'Teste', '320.302.102-02');
    expect(sut).toHaveProperty('firsName', 'Teste');
    expect(sut).toHaveProperty('lastName', 'Teste');
    expect(sut).toHaveProperty('cpf', '320.302.102-02');
  });

  it('Should have parameters', () => {
    const sut = createindividualCustomer('Teste', 'Teste', '320.302.102-02');
    expect(sut.getName()).toBe('Teste Teste');
  });
});

describe('Company Costumer', () => {
  afterEach(() => jest.clearAllMocks());
  it('Should have parameters', () => {
    const sut = createCompanyCustomer('Teste', '320.302.102-02');
    expect(sut).toHaveProperty('name', 'Teste');
    expect(sut).toHaveProperty('cnpj', '320.302.102-02');
  });

  it('Should have parameters', () => {
    const sut = createindividualCustomer('Teste', 'Teste', '320.302.102-02');
    expect(sut.getIDN()).toBe('320.302.102-02');
    expect(sut.getName()).toBe('Teste Teste');
  });
});
