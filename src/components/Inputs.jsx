import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import axios from "axios";

function Inputs({ setQuery, units, setUnits }) {
  const [name, setName] = useState("");
  const [data, setData] = useState();

  const handleSearch = async () => {
    if (name !== "") setQuery({ q: name });
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=bd5e378503939ddaee76f12ad7a97608`
      );
      setData(response.data);
    } catch (err) {
      toast.error("Please enter the city name correctly");
    }
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      toast.info("Fetching location of user");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  const handleUnits = (e) => {
    const optedUnit = e.currentTarget.name;
    if (units !== optedUnit) setUnits(optedUnit);
  };

  return (
    <>
      {/* Large and Medium Screen */}
      <div className="md:flex flex-row justify-center my-6 hidden">
        <div className=" flex flex-row w-3/4 items-center justify-center space-x-4">
          <UilLocationPoint
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocation}
          />
          <input
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            type="text"
            className="text-xl font-light px-4 py-2 w-full focus:outline-none shadow-xl capitalize rounded-md"
            placeholder="Search city "
          />
          <UilSearch
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearch}
          />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center cursor-pointer">
          <button
            name="metric"
            className={`text-xl text-white font-light transition ease-out hover:scale-125`}
            onClick={handleUnits}
          >
            °C
          </button>
          <p className="text-xl text-white mx-2 cursor-pointer"> | </p>
          <button
            name="imperial"
            className={`text-xl text-white font-light transition ease-out hover:scale-125`}
            onClick={handleUnits}
          >
            °F
          </button>
        </div>
      </div>

      {/* Small Screen */}
      <div className="md:hidden flex flex-col justify-center my-6">
        <div className=" flex flex-row w-full items-center justify-between space-x-4">
          <div className="flex flex-row flex-1 items-center gap-2">
            <input
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              type="text"
              className="text-md font-light px-4 py-2 focus:outline-none shadow-xl capitalize rounded-md"
              placeholder="Search city "
            />
            <UilSearch
              size={18}
              className="text-white cursor-pointer transition ease-out hover:scale-125"
              onClick={handleSearch}
            />
          </div>
          <UilLocationPoint
            size={18}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocation}
          />
          <div className="flex flex-row items-center justify-center cursor-pointer">
            <button
              name="metric"
              className={`text-xl text-white font-light transition ease-out hover:scale-125`}
              onClick={handleUnits}
            >
              °C
            </button>
            <p className="text-xl text-white mx-2 cursor-pointer"> | </p>
            <button
              name="imperial"
              className={`text-xl text-white font-light transition ease-out hover:scale-125`}
              onClick={handleUnits}
            >
              °F
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inputs;
