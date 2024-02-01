import React from "react";
import { formatToLocalTime } from "../server/WeatherService";

export const LocationAndTime = ({
  weather: { dt, timezone, name, country },
}) => {
  return (
    <div>
      {/* Medium and large Screen */}
      <div className="md:flex hidden items-center justify-center my-6">
        <p className=" text-white text-lg font-extralight ">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="md:flex hidden items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>

      {/* Small Screen */}
      <div className="flex md:hidden items-center justify-center my-6">
        <p className=" text-white text-md font-extralight ">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="flex md:hidden items-center justify-center">
        <p className="text-white text-2xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};
