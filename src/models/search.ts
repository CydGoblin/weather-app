import axios from "axios";
import dotenv from "dotenv";
import { MapboxFeatures, Places, Weather } from "../global";
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
  }

  async weatherByCoords(lat: number, lng: number) {
    try {
      const { data }: { data: Weather } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            lat: lat,
            lon: lng,
            appid: process.env.OPENWEATHER_KEY,
            units: "metric",
          },
        }
      );
      return {
        desc: data.weather[0].description,
        temp: data.main.temp,
        min: data.main.temp_min,
        max: data.main.temp_max,
      };
    } catch (error) {
      console.log(error);
      return "No weather data for this location";
    }
  }
}
