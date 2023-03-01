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

const dataAPI = getCoins();
console.log(dataAPI);

export const ctx = document.getElementById("myChart");

export const miGrafica = () => {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Rojo", "Azul", "Amarillo", "Verde", "Morado", "Naranja"],
      datasets: [
        {
          label: "Número de votos",
          data: [12, 19, 3, 5, 2, 3],
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
