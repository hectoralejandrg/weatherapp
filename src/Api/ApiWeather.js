const getWeather = (location) => {
  //const  = location;
  console.log(location);
  return fetch(location).then((res) => res.json());
};

export default getWeather;
