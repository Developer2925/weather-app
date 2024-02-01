import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrl } from "../server/WeatherService";

function TempAndDetails({
  weather: {
    details,
    description,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    deg,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <>
      {/* Small SCreen */}
      <div>
        <div className="md:flex hidden items-center justify-center py-6 text-2xl text-white">
          <div>
            <p>{details}</p>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <div className="md:flex hidden flex-row items-center justify-between text-white py-3">
          <img src={iconUrl(icon)} alt="" className="w-20" />
          <p className="text-5xl">{temp.toFixed()}°</p>

          <div className="flex flex-col space-y-2 border border-solid px-2 py-4 rounded-xl shadow-lg">
            <div className="flex font-light text-sm ">
              <UilTemperature size={18} className="mr-1" />
              Real Fell:
              <span className="font-medium ml-1 ">{feels_like.toFixed()}°</span>
            </div>
            <div className="flex font-light text-sm">
              <UilTear size={18} className="mr-1" />
              Humidity:
              <span className="font-medium ml-1 ">{humidity}%</span>
            </div>
            <div className="flex font-light text-sm">
              <UilWind size={18} className="mr-1" />
              Wind:
              <span className="font-medium ml-1 ">
                {speed}km/h {deg}°
              </span>
            </div>
          </div>
        </div>

        <div className="md:flex hidden flex-row items-center justify-center space-x-2 text-white text-sm py-3">
          <UilSun />
          <p className="font-light">
            Rise:{" "}
            <span className="font-medium ml-1">
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </span>
          </p>
          <p className="font-light"> | </p>
          <UilSunset />
          <p className="font-light">
            Set:{" "}
            <span className="font-medium ml-1">
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </span>
          </p>
          <p className="font-light "> | </p>
          <UilArrowUp />
          <p className="font-light ">
            High:{" "}
            <span className="font-medium ml-1">{temp_max.toFixed()}°</span>
          </p>
          <p className="font-light "> | </p>
          <UilArrowDown />
          <p className="font-light ">
            Low: <span className="font-medium ml-1">{temp_min.toFixed()}°</span>
          </p>
        </div>
      </div>

      {/* Small SCreen */}
      <div>
        <div className="flex md:hidden items-center justify-evenly py-6 text-xl text-white">
          <div>
            <p>{details}</p>
            <p className="text-sm">{description}</p>
          </div>
          <img src={iconUrl(icon)} alt="" className="w-16" />
          <p className="text-4xl">{temp.toFixed()}°</p>
        </div>
        <div className="flex md:hidden flex-row gap-2 text-white py-3">
          <div className="flex flex-col flex-1 space-y-2 border border-solid px-2 py-4 rounded-xl shadow-lg">
            <div className="flex font-light text-sm ">
              <UilTemperature size={18} className="mr-1" />
              Real Fell:
              <span className="font-medium ml-1 ">{feels_like.toFixed()}°</span>
            </div>
            <div className="flex font-light text-sm">
              <UilTear size={18} className="mr-1" />
              Humidity:
              <span className="font-medium ml-1 ">{humidity}%</span>
            </div>
            <div className="flex font-light text-sm">
              <UilWind size={18} className="mr-1" />
              Wind:
              <span className="font-medium ml-1 ">
                {speed}km/h {deg}°
              </span>
            </div>
          </div>
          <div className="flex md:hidden flex-1 flex-col text-white text-sm p-3 border border-solid rounded-xl">
            <div className="flex flex-row items-center">
              <UilSun />
              <p className="font-light">
                Rise:{" "}
                <span className="font-medium ml-1">
                  {formatToLocalTime(sunrise, timezone, "hh:mm a")}
                </span>
              </p>
            </div>
            <div className="flex flex-row items-center">
              <UilSunset />
              <p className="font-light">
                Set:{" "}
                <span className="font-medium ml-1">
                  {formatToLocalTime(sunset, timezone, "hh:mm a")}
                </span>
              </p>
            </div>
            <div className="flex flex-row items-center">
              <UilArrowUp />
              <p className="font-light ">
                High:{" "}
                <span className="font-medium ml-1">{temp_max.toFixed()}°</span>
              </p>
            </div>
            <div className="flex flex-row items-center">
              <UilArrowDown />
              <p className="font-light ">
                Low:{" "}
                <span className="font-medium ml-1">{temp_min.toFixed()}°</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TempAndDetails;
