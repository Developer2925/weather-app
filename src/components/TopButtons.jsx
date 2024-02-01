import React from "react";

function TopButtons({ setQuery }) {
  const lgCities = [
    {
      id: 1,
      title: "Nagpur",
    },
    {
      id: 2,
      title: "Bangalore",
    },
    {
      id: 3,
      title: "Mumbai",
    },
    {
      id: 4,
      title: "Delhi",
    },
    {
      id: 5,
      title: "Gujarat",
    },
  ];
  const smCities = [
    {
      id: 1,
      title: "Nagpur",
    },
    {
      id: 2,
      title: "Bangalore",
    },
    {
      id: 3,
      title: "Mumbai",
    },
    {
      id: 4,
      title: "Delhi",
    },
  ];
  return (
    <>
      {/* Medium and Large Screen */}
      <div className="md:flex hidden items-center justify-around my-6 border border-solid p-2 rounded-md shadow-md">
        {lgCities.map((city) => (
          <button
            key={city.id}
            className="text-white text-lg font-medium transition ease-out hover:scale-110"
            onClick={() => setQuery({ q: city.title })}
          >
            {city.title}
          </button>
        ))}
      </div>

      {/* Small Screen */}
      <div className="md:hidden flex items-center justify-around my-6 border border-solid p-2 rounded-md gap-2 shadow-md">
        {smCities.map((city) => (
          <button
            key={city.id}
            className="text-white text-sm font-medium transition ease-out hover:scale-110"
            onClick={() => setQuery({ q: city.title })}
          >
            {city.title}
          </button>
        ))}
      </div>
    </>
  );
}

export default TopButtons;
