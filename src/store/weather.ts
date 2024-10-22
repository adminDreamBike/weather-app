import { Description, Icon, Main, IWeather } from "@/types";
import { create } from "zustand";

interface WeatherStoreState {
  weather: IWeather;
}

interface WeatherActions {
  setWeather: (weather: IWeather) => void;
}
const INITIAL_STATE: WeatherStoreState = {
  weather: {
    current: {
      dt: 1729373585,
      sunrise: 1729334887,
      sunset: 1729377953,
      temp: 298.25,
      feels_like: 298.59,
      pressure: 1010,
      humidity: 68,
      dew_point: 291.93,
      uvi: 0.21,
      clouds: 75,
      visibility: 10000,
      wind_speed: 6.71,
      wind_deg: 190,
      wind_gust: 0,
      weather: [
        {
          id: 803,
          main: Main.Clouds,
          description: Description.BrokenClouds,
          icon: Icon.The04D,
        },
      ],
    },
    daily: [],
    hourly: [],
    lat: 6.2443,
    lon: -75.5736,
    minutely: [],
    timezone: "America/Bogota",
    timezone_offset: -18000,
  },
};
export const useWeatherStore = create<WeatherStoreState & WeatherActions>(
  (set) => ({
    weather: INITIAL_STATE.weather,
    setWeather: (weather) => set({ weather }),
  })
);
