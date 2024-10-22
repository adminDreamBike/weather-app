import axios from "axios";
interface Ilocation {
  lat: number;
  lon: number;
}
export const getWeather = async ({ lat, lon }: Ilocation) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/3.0/onecall",
    {
      params: {
        lat: lat,
        lon: lon,
        appid: "17d439d40d4f9cbc7095ca0d0561cd09",
      },
    }
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return response.data;
};

export const searchLocations = async (cityName: string) => {
  const response = await axios.get(
    "http://api.openweathermap.org/geo/1.0/direct",
    {
      params: {
        q: cityName,
        appid: "17d439d40d4f9cbc7095ca0d0561cd09",
      },
    }
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return response.data;
};
