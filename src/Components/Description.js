import {
  faCalendarAlt,
  faCloud,
  faTemperatureHigh,
  faWind
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styleDescription.css";

const Description = ({
  weather,
  description,
  wind,
  clouds,
  pressure,
  temp,
  icon,
  handle
}) => {
  return (
    <div>
      <div className="container-description">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={"Weather icon"}
        />
        <h2 className="color-secondary">
          {temp[0]} {temp[1]}
        </h2>
      </div>
      <div>
        <p className="p2 color-secondary">
          <FontAwesomeIcon icon={faCalendarAlt} /> "{weather}/ {description}"
        </p>
        <p className="p2 color-secondary">
          <FontAwesomeIcon icon={faWind} /> Wind speed: {wind} m/s
        </p>
        <p className="p2 color-secondary">
          <FontAwesomeIcon icon={faCloud} /> Clouds: {clouds}%
        </p>
        <p className="p2 color-secondary">
          <FontAwesomeIcon icon={faTemperatureHigh} /> Pressure: {pressure} hPa
        </p>
      </div>
      <button className="button" onClick={() => handle()}>
        DEGREES °F/°C
      </button>
    </div>
  );
};
export default Description;
