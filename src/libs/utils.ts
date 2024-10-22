const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getDate = () => {
  const date = new Date();
  const currentDayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const monthOfYear = monthsOfYear[date.getMonth()];

  const currentDate = `${currentDayOfWeek.slice(
    0,
    3
  )}, ${dayOfMonth} ${monthOfYear.slice(0, 3)}`;

  return currentDate;
};

export const convertKelvinToCelsius = (kelvin: number | undefined) => {
  const celsius = kelvin && kelvin - 273.15;

  return celsius?.toString().slice(0, 4);
};
