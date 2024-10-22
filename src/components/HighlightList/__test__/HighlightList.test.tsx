import { render } from "@testing-library/react";
import { HighlightList } from "../HighlightList";
import React from "react";
import { ChakraUIProvider } from "@/providers/ChakraUIProvider";

const currentValues = {
  clouds: 75,
  dew_point: 293.92,
  dt: 1729633812,
  feels_like: 294.81,
  humidity: 99,
  pressure: 1013,
  sunrise: 1729594088,
  sunset: 1729637096,
  temp: 294.08,
  uvi: 0.52,
  visibility: 10000,
  weather: [
    {
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds",
    },
  ],
  wind_deg: 50,
  wind_gust: 0,
  wind_speed: 3.58,
};
const dailyValues = {
  clouds: 100,
  dew_point: 288.68,
  dt: 1729612800,
  feels_like: { day: 291.04, night: 288.92, eve: 294.81, morn: 290.39 },
  humidity: 99,
  moon_phase: 0.7,
  moonrise: 1729655700,
  moonset: 1729612320,
  pop: 1,
  pressure: 1017,
  rain: 21.24,
  summary: "Expect a day of partly cloudy with rain",
  sunrise: 1729594088,
  sunset: 1729637096,
  temp: { day: 290.65, min: 288.75, max: 294.08, night: 288.75, eve: 294.08 },
  uvi: 5.72,
  weather: [
    {
      description: "broken clouds",
      icon: "04d",
      id: 803,
      main: "Clouds",
    },
  ],
  wind_deg: 88,
  wind_gust: 1.56,
  wind_speed: 1.07,
};
const minutelyValues = {
  dt: 1729633860,
  precipitation: 0,
};
const defaultProps = {
  current: { ...currentValues },
  daily: { ...dailyValues },
  hourly: [{ ...currentValues }],
  lat: 6.2443,
  lon: -75.5736,
  minutely: [{ ...minutelyValues }],
  timezone: "America/Bogota",
  timezone_offset: -18000,
};
describe("", () => {
  test("", () => {
    const { asFragment } = render(
      <ChakraUIProvider>
        <HighlightList data={defaultProps} />
      </ChakraUIProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
