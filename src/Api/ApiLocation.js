const getApiLocation = () => {
  const url = `https://ipinfo.io/json`;
  return fetch(url).then((res) => res.json());
};
export default getApiLocation;