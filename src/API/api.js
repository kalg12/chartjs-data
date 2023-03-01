const API =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=100&page=1&sparkline=false";

/* Creamos función para consumir API */
const getCoins = async () => {
  try {
    const getApi = await fetch(API);
    const data = await getApi.json();
    console.log(data); //Nos ayuda a ver en consola
    return data;
  } catch (error) {
    console.log("Error a la hora de consumir la API");
  }
};
