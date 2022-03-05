export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface CustomerProtocol {
  firsName: string;
  lastName: string;
  cpf: string;
}

export interface CompanyProtocol {
  name: string;
  cnpj: string;
}
