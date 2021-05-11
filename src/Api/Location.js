const getLocation = () => {
  const position = {};
  function location(pos) {
    position["lat"] = pos.coords.latitude;
    position["lon"] = pos.coords.longitude;
  }
  function err() {
    console.log("No se pudo obtener tu ubicacion.");
  }
  navigator.geolocation.getCurrentPosition(location, err);
  return position;
};
export default getLocation;
