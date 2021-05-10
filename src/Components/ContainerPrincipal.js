import { useEffect, useState } from "react";
import getWeather from "../Api/ApiWeather";
import getLocation from "../Api/Location";

import Description from "./Description";
import "./stylePrincipal.css";

const ContainerPrincipal = () => {
  const [dataWeather, setDataWeather] = useState({
    weather: [
      {
        id: 0,
        main: "",
        description: "",
        icon: ""
      }
    ],
    main: {
      temp: 0,
      pressure: 0
    },
    wind: {
      speed: 0
    },
    clouds: {
      all: 0
    },
    sys: {
      country: ""
    },
    name: ""
  });

  const [temperature, setTemperature] = useState([1, "°C"]);

  useEffect(() => {
    getWeather(getLocation())
      .then((data) => setDataWeather(data))
      .catch((err) => console.log("error", err));
    console.log(dataWeather);
  }, []);

  useEffect(() => {
    const convert = dataWeather.main.temp - 273.15;
    setTemperature([Math.round(convert * 100) / 100, "°C"]);
  }, [dataWeather]);

  const handleChange = () => {
    if (temperature[1] === "°C") {
      let farh = temperature[0] * (9 / 5) + 32;
      setTemperature([Math.round(farh * 100) / 100, "°F"]);
    } else {
      let cels = (temperature[0] - 32) * (5 / 9);
      setTemperature([Math.round(cels * 100) / 100, "°C"]);
    }
  };

  return (
    <div className="container">
      <h1 className="p2 color-text">Wheather App</h1>
      <h2 className="p2 color-text">
        {dataWeather.name}, {dataWeather.sys.country}
      </h2>
      <Description
        weather={dataWeather.weather[0].main}
        description={dataWeather.weather[0].description}
        wind={dataWeather.wind.speed}
        clouds={dataWeather.clouds.all}
        pressure={dataWeather.main.pressure}
        temp={temperature}
        icon={dataWeather.weather[0].icon}
        handle={handleChange}
      />
    </div>
  );
};
export default ContainerPrincipal;
