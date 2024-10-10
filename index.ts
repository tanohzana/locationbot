import axios from "axios";

interface LocationResult {
  country?: string;
  city?: string;
  street?: string;
  [key: string]: any;
}

export class LocationBot {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async extractLocation(input: string): Promise<LocationResult> {
    try {
      const response = await axios.post(
        "https://locationbot-backend.onrender.com/extract-country",
        { input },
        {
          headers: {
            "api-key": this.apiKey,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error extracting location:", error);
      throw new Error("Failed to extract location");
    }
  }
}
