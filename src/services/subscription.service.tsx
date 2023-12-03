import { Subscription } from "models/subscription.model";

class SubscriptionService {
  private baseUrl: string = "subscriptions.json";

  constructor() {}

  async getSubscription<T>(id: string): Promise<T> {
    try {
      const response = await fetch(`/${this.baseUrl}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      const customerDetail = data.filter((s: Subscription) => s.user_id === id);

      return customerDetail[0];
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }
}

export default SubscriptionService;
