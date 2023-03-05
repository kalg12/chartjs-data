export const ctx = document.getElementById("myChart");

export const miGrafica = async () => {
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

  const dataAPI = await getCoins();
  console.log(dataAPI);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [dataAPI[2].id, dataAPI[3].id, dataAPI[4].id, dataAPI[5].id],
      datasets: [
        {
          label: "Número de votos",
          data: [
            dataAPI[2].current_price,
            dataAPI[3].current_price,
            dataAPI[4].current_price,
            dataAPI[5].current_price,
          ],
          borderWidth: 5,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

miGrafica();
