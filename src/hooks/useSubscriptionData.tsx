import SubscriptionService from "@services/subscription.service";
import { Subscription } from "models/subscription.model";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useSubscriptionData = () => {
  const [data, setData] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const subscriptionService = useMemo(() => new SubscriptionService(), []);
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const result: Subscription[] =
        await subscriptionService.getSubscriptions();
      setData(result);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  }, [subscriptionService]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { data, loading, error };
};
