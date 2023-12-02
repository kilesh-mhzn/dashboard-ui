// ApiService.tsx
interface ApiServiceDependencies {
  baseUrl: string;
}

class ApiService {
  private baseUrl: string;

  constructor(dependencies: ApiServiceDependencies) {
    this.baseUrl = dependencies.baseUrl;
  }

  async fetchData<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }
}

export default ApiService;
