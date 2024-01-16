import customerData from "../data/customers-database.json";

type Customer = {
  customerId: string;
  gender: string;
  givenName: string;
  surName: string;
  birthDate: string;
  isBusinessCustomer: boolean;
};

class CustomerDataBase {
  customers: Customer[] | undefined;

  constructor() {

    this.customers = customerData;

  }

  findById(id: string): Customer | undefined {
    return this.customers?.filter(
      (customer: Customer) => customer.customerId === id,
    )[0];
  }
}

export default CustomerDataBase;
