const BASE_URL = 'http://190.119.206.196:3000';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
    usuario:{
       enviarCorreoVentas(datos){
          return callApi('/api/mails', { //enviar correo ventas datos en general del cliente ya sea correo o numereos telefonicos
            method: 'POST',
            body: JSON.stringify(datos),
          });
       }
    }
};
  

export default api;
