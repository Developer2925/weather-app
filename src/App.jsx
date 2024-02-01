import { useEffect } from "react";
import { useState } from "react";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import { LocationAndTime } from "./components/LocationAndTime";
import TempAndDetails from "./components/TempAndDetails";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./server/WeatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "pune" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name},${data.country}.`
        ),
          setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const changeBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-500";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-400 to-blue-500 ";
    return "from-yellow-500 to-orange-700";
  };

  return (
    <>
      <div
        className={`mx-auto max-w-screen-md py-2 px-4 md:px-20 bg-gradient-to-br shadow-xl ${changeBackground()}`}
      >
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <div>
            <LocationAndTime weather={weather} />
            <TempAndDetails weather={weather} />
            <Forecast title={"HOURLY FORECAST"} items={weather.hourly} />
            <Forecast title={"DAILY FORECAST"} items={weather.daily} />
          </div>
        )}
      </div>
      <ToastContainer autoClose={2000} theme="colored" newestOnTop={true} />
    </>
  );
}

export default App;
