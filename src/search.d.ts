declare namespace NodeJS {
  export interface ProcessEnv {
    MAPBOX_KEY: string;
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
