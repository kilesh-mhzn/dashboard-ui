import { useState, useEffect, useMemo } from "react";
import ApiService from "@services/apiService";
import { User } from "./customer.model";

interface UseUserDataProps {
  baseUrl: string;
}

export const useUserData = ({ baseUrl }: UseUserDataProps) => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const apiService = useMemo(() => new ApiService({ baseUrl }), [baseUrl]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result: User[] = await apiService.fetchData("");
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
  }, [apiService, baseUrl]);

  return { data, loading, error };
};
