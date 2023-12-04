import { useState, useEffect, useMemo, useCallback } from "react";
import CustomerService from "@services/customer.service";
import { User } from "./customer.model";
import { debounce } from "utils";

export const useUserData = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const customerService = useMemo(() => new CustomerService(), []);

  const fetchData = useCallback(
    async (term: string) => {
      try {
        setLoading(true);
        const result: User[] = await customerService.getCustomers({
          searchTerm: term,
        });
        setData(result);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    },
    [customerService]
  );

  useEffect(() => {
    fetchData(searchTerm);
  }, [fetchData, searchTerm]);

  const debouncedSearch = debounce((searchTerm: string) => {
    setSearchTerm(searchTerm);
  }, 500);

  return { data, loading, error, setSearchTerm, debouncedSearch };
};
