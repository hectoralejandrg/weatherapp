import { useEffect, useState, lazy, Suspense } from "react";
import getWeather from "../Api/ApiWeather";
import getLocation from "../Api/Location";
const City = lazy(() => import("./City"));
const Description = lazy(() => import("./Description"));
//import Description from "./Description";

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
      type: 0,
      country: ""
    },
    name: ""
  });

  const [temperature, setTemperature] = useState([1, "°C"]);
  const [coord, setCoord] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    const loc =async (pos)=>{
      await setCoord({lat: pos.coords.latitude, lon: pos.coords.longitude})
    }
    const getCurrentPosition=()=>{
      navigator.geolocation.getCurrentPosition(loc)
    }
    getCurrentPosition()
  }, [])

  useEffect(() => {
    getWeather(coord)
      .then((data) => setDataWeather(data))
      .catch((err) => console.log("error", err));
  }, [coord]);

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
      <Suspense fallback={
        <div className="load-container">
          <div className="spinner"></div>
        </div>
      }>
        <City city={dataWeather.name} country={dataWeather.sys.country} />
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
      </Suspense>
    </div>
  );
};
export default ContainerPrincipal;
