//Variáveis e Seleão de Elementos

//api
const apiKey = "a613c9c27f20f91c828d01921f2a563a";

//input da cidade
const cityInput = document.querySelector("#city-input");
//botão de pesquisa
const searchButton = document.querySelector("#search");

// nome da cidade
const cityElement = document.querySelector("#city");
//elementos do clima
const tempElement = document.querySelector("#temperature span");
//elemento da descrição
const descElement = document.querySelector("#description");
//ícone do clima
const weatherIconElement = document.querySelector("#weather-icon");
//bandeira do país
const countryElement = document.querySelector("#country");
//elementos de umidade e vento
const umidtyElement = document.querySelector("#umidity");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

//Eventos

//ao clicar no botão de pesquisa
searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  //pega o valor do input
  const city = cityInput.value;

  console.log(city);

  //mostra os dados da função ao clicar
  showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const city = e.target.value;
    showWeatherData(city);
  }
});

//Funções

//q= - pegando os dados da cidade a. &units=metric - para pegar a temperatura em celsius. &appid= - chave da api. &lang=pt_br - para pegar os dados em português
const getWeatherData = async (city) => {
  const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  //pegando os dados da api
  const response = await fetch(apiWeatherUrl);
  const data = await response.json();

  //visualizar os dados para conseguir manipular de onde vem cada um
  console.log(data);

  //retornar os dados
  return data;
};

//função para mostrar os dados do clima da cidade
const showWeatherData = async (city) => {
  const data = await getWeatherData(city);

  //data.name - nome da cidade
  cityElement.innerText = data.name;
  //mostrar a temperatura apenas com números inteiros
  tempElement.innerText = parseInt(data.main.temp);
  //nublado, ensolarado, chuvoso... Primeiro item do array de descrição
  descElement.innerText = data.weather[0].description;
  //mudar o ícone do clima. data.weather[0].icon - ícone do clima. - va mudar o src do icone definido para o icone do clima da descrição da cidade
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  //mostrar a bandeira do país
  umidtyElement.innerText = `💧 ${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed} km/h`;

  weatherContainer.classList.remove("hide");
};
