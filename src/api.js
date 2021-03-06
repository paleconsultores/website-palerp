const BASE_URL = 'http://papi.hopto.org:3000';
// const BASE_URL = 'https://www.api.consultasruc.com:4000';
// const BASE_URL = 'http://localhost:5000';
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
  user:{
    // send email to info@palerp the data of the person(name, email and message)
    sendEmails(data){
      return callApi('/api/mails', { 
        method: 'POST',
        body: JSON.stringify(data),
      });
    }
  },
  libroReclamaciones:{
    guardarReclamo(datos){
      return callApi('/api/AIncidentes/save', {
          method: 'POST',
          body: JSON.stringify(datos),
        });
   },
   traerNroIncidencia(datos){
    return callApi('/api/AIncidentes/listarUno', {
      method: 'POST',
      body: JSON.stringify(datos),
    });
   },
   creacionPDF(datos){
    return callApi('/api/mails/createPDFNuevo', {
        method: 'POST',
        body: JSON.stringify(datos),
      });
    },
    enviarEmail(datos){
        return callApi('/api/mails/emailCliente', {
        method: 'POST',
        body: JSON.stringify(datos),
      });
    }
  }
};
  

export default api;