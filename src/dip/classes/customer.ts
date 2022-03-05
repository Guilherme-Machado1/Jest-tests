import {
  CustomerProtocol,
  CompanyProtocol,
  CustomerOrder,
} from './intefaces/customer-protocol';

export class Customer implements CustomerProtocol, CustomerOrder {
  firsName: string;
  lastName: string;
  cpf: string;
  constructor(firsName: string, lastName: string, cpf: string) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return this.firsName + ' ' + this.lastName;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export class CompanyCustomer implements CompanyProtocol, CustomerOrder {
  name: string;
  cnpj: string;
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.name;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
