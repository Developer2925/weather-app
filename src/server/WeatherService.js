import { DateTime } from "luxon";

const API_KEY = "bd5e378503939ddaee76f12ad7a97608"; //1fa9ff4126d95b8db54f3897a208e91c //bd5e378503939ddaee76f12ad7a97608
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

// Fetching the following data from the API
const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed, deg },
  } = data;

  const { main: details, description, icon } = weather[0]; // main refers to the weather type - cloudy, sunny, etc we renamed Main->details

  return {
    lat,
    lon,
    temp,
    temp_min,
    temp_max,
    humidity,
    feels_like,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    description,
    icon,
    speed,
    deg,
  };
};

// Fetching data to display hourly and daily weather forecast
const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;

  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      dt: formatToLocalTime(d.dt, timezone, "dd LLL yyyy"),
      weather: d.weather[0].main,
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 6).map((h) => {
    return {
      title: formatToLocalTime(h.dt, timezone, "hh:mm a"),
      temp: h.temp,
      weather: h.weather[0].main,
      icon: h.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

// Fetching current weather
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;
  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current, minutely, alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

// Date and Time
const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// Icons
const iconUrl = (code) => `https://openweathermap.org/img/wn/${code}.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrl };
