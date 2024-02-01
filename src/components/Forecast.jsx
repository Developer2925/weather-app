import React from "react";
import { iconUrl } from "../server/WeatherService";

function Forecast({ title, items }) {
  return (
    <>
      {/* Medium and Large Screen */}
      <div className="md:flex hidden flex-col border border-solid px-4 pb-2 mb-2 rounded-xl shadow-lg ">
        <div className="flex items-center justify-start mt-6">
          <p className="text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2" />
        <div className="flex flex-row items-center justify-between text-white">
          {items.map((item) => (
            <div className="flex flex-col items-center justify-center">
              <p className="font-light text-sm">{item.dt}</p>
              <p className="font-light text-sm"> {item.title} </p>
              <img src={iconUrl(item.icon)} alt="" className="w-12 my-1" />
              <p className="font-light text-sm">{item.weather}</p>
              <p className="font-medium "> {item.temp.toFixed()}° </p>
            </div>
          ))}
        </div>
      </div>

      {/* Small Screen */}
      <div className="flex md:hidden flex-col border border-solid px-2 pb-2 mb-2 rounded-xl shadow-lg ">
        <div className="flex items-center justify-start mt-6">
          <p className="text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2" />
        <div className="flex flex-row items-center justify-between text-white">
          {items.map((item) => (
            <div className="flex flex-col items-center">
              <p className="font-light text-xs"> {item.title} </p>
              <p className="font-light text-xs">{item.dt}</p>
              <img src={iconUrl(item.icon)} alt="" className="w-12 my-1" />
              <p className="font-light text-xs">{item.weather}</p>
              <p className="font-medium text-xs"> {item.temp.toFixed()}° </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Forecast;
