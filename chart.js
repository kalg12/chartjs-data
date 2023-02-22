//Aquí vamos a importar la data de nuestra API
import { getCoins } from "./src/API/api";

const dataAPI = await getCoins();

//Proxima clase clase vamos a traer la data en nuestra gráfica

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
