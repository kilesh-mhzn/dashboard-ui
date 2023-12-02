import { useState, useEffect, useMemo } from "react";
import ApiService from "@services/apiService";

export type User = {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  active: string;
  address: string;
  country: string;
  join_date: string;
};

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
        const userData: User[] = await apiService.fetchData("");
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
