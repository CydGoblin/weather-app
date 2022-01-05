import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export class Search {
  history: string[];

  constructor() {
    // TODO: Read storage if exist
    this.history = [];
  }

  get paramsMapbox() {
    return;
  }

  async place(place: string): Promise<string[]> {
    // HTTP call
    try {
      const { data } = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        {
          params: {
            limit: 5,
            access_token: process.env.MAPBOX_KEY,
          },
        }
      );
      console.log(data);
      return [];
    } catch (error) {
      console.log(error);
      return [];
    }

    // Return search results
  }
}
