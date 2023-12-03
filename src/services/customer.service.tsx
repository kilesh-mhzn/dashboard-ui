import { User } from "@pages/customers/customer.model";

class CustomerService {
  private baseUrl: string = "users.json";

  constructor() {}

  async getCustomers<T>(): Promise<T> {
    try {
      const response = await fetch(`/${this.baseUrl}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }
  async getCustomer<T>(id: number): Promise<T> {
    try {
      const response = await fetch(`/${this.baseUrl}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      const customerDetail = data.filter(
        (customer: User) => customer.id === id
      );
      return customerDetail[0];
    } catch (error) {
      console.log(
        "🚀 ~ file: customer.service.tsx:28 ~ CustomerService ~ error:",
        error
      );
      throw new Error("Error fetching data");
    }
  }
}

export default CustomerService;
