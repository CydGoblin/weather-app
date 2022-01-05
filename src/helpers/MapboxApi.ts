import axios from "axios";

export class MapboxApi {
  constructor(place: string) {
    axios.create({
      baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
      params: {
        limit: 5,
        access_token:
          "pk.eyJ1IjoidHVycXVlc28iLCJhIjoiY2t5MXd2d2QwMGZoYTJvbzBpM2RrMHNpdyJ9.3a4gg3qJXBedE1iWnxme2A",
      },
    });
  }
}
