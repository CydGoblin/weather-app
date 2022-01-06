namespace NodeJS {
  interface ProcessEnv {
    MAPBOX_KEY: string;
    OPENWEATHER_KEY: string;
  }
}

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

export interface Weather {
  weather: WeatherEntity[];
  main: Main;
}

export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
