const getWeather = ({ lat, lon }) => {
  const apiKey = "553a92e579b8cf3e4c4e28c4bb54a51e";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  console.log(url);
  return fetch(url).then((res) => res.json());
};

export default getWeather;
