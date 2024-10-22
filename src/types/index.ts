export interface LocalNames {
  ar: string;
  en: string;
  es: string;
  fa: string;
  mk: string;
  oc: string;
  pt: string;
  ru: string;
  uk: string;
  ur: string;
}

export interface IWeather {
  current:         Current;
  daily:           Daily[];
  hourly:          Current[];
  lat:             number;
  lon:             number;
  minutely:        Minutely[];
  timezone:        string;
  timezone_offset: number;
 }
 
 export interface Current {
  clouds:     number;
  dew_point:  number;
  dt:         number;
  feels_like: number;
  humidity:   number;
  pop?:       number;
  pressure:   number;
  rain?:      Rain;
  sunrise?:   number;
  sunset?:    number;
  temp:       number;
  uvi:        number;
  visibility: number;
  weather:    Weather[];
  wind_deg:   number;
  wind_gust:  number;
  wind_speed: number;
 }
 
 export interface Rain {
  "1h": number;
 }
 
 export interface Weather {
  description: Description;
  icon:        Icon;
  id:          number;
  main:        Main;
 }
 
 export enum Description {
  BrokenClouds = "broken clouds",
  LightRain = "light rain",
  ModerateRain = "moderate rain",
  OvercastClouds = "overcast clouds",
 }
 
 export enum Icon {
  The04D = "04d",
  The04N = "04n",
  The10D = "10d",
  The10N = "10n",
 }
 
 export enum Main {
  Clouds = "Clouds",
  Rain = "Rain",
  Sleet = 'Sleet',
  Sunny = 'Sunny'
 }
 
 export interface Daily {
  clouds:     number;
  dew_point:  number;
  dt:         number;
  feels_like: FeelsLike;
  humidity:   number;
  moon_phase: number;
  moonrise:   number;
  moonset:    number;
  pop:        number;
  pressure:   number;
  rain:       number;
  summary:    string;
  sunrise:    number;
  sunset:     number;
  temp:       Temp;
  uvi:        number;
  weather:    Weather[];
  wind_deg:   number;
  wind_gust:  number;
  wind_speed: number;
 }
 
 export interface FeelsLike {
  day:   number;
  eve:   number;
  morn:  number;
  night: number;
 }
 
 export interface Temp {
  day:   number;
  eve:   number;
  max:   number;
  min:   number;
  morn:  number;
  night: number;
 }
 
 export interface Minutely {
  dt:            number;
  precipitation: number;
 }
 