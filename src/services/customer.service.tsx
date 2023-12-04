import { User } from "@pages/customers/customer.model";

class CustomerService {
  private baseUrl: string = "users.json";

  constructor() {}

  async getCustomers<T>({ searchTerm = "" }): Promise<T> {
    try {
      const response = await fetch(`/${this.baseUrl}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await response.json();
      const customerData = data
        .map((customer: User) => {
          return {
            ...customer,
            full_name: `${customer.first_name} ${customer.middle_name} ${customer.last_name}`,
          };
        })
        .filter((fd: User) => {
          const searchTermsArray = searchTerm.toLowerCase().split(" ");

          return searchTermsArray.every((term) =>
            Object.values(fd).some((value) =>
              String(value).toLowerCase().includes(term)
            )
          );
        });
      return customerData;
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
