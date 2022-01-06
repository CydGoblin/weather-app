import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export interface MapboxFeatures {
  id: "string";
  place_name: string;
  center: [number, number];
}

export interface Places {
  id: string;
  name: string;
  lng: number;
  lat: number;
}

export class Search {
  history: string[];

  constructor() {
    // TODO: Read storage if exist
    this.history = [];
  }

  get paramsMapbox() {
    return;
  }

  async place(place: string): Promise<Places[]> {
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
      return (data.features as MapboxFeatures[]).map((place) => ({
        id: place.id,
        name: place.place_name,
        lng: place.center[0],
        lat: place.center[1],
      }));
    } catch (error) {
      console.log(error);
      return [];
    }

    // Return search results
  }
}
