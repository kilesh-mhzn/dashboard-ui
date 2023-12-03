import { useState, useEffect, useMemo } from "react";
import CustomerService from "@services/customer.service";
import { User } from "./customer.model";

export const useUserData = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const customerService = useMemo(() => new CustomerService(), []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result: User[] = await customerService.getCustomers();
        const userData = result.map((user) => {
          return {
            ...user,
            full_name: `${user.first_name} ${user.middle_name} ${user.last_name}`,
          };
        });
        setData(userData);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [customerService]);

  return { data, loading, error };
};
