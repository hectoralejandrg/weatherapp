const getLocation = () => {
  const position = {};
  const location= async (pos)=> {
    await(position["lat"] = pos.coords.latitude);
    await(position["lon"] = pos.coords.longitude);
  }
  function err() {
    console.log("No se pudo obtener tu ubicacion.");
  }
  navigator.geolocation.getCurrentPosition(location, err);
  return position;
};
export default getLocation;
