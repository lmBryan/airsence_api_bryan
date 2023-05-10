const axios = require('axios');
const db = require('../db/database');

// Hacer la solicitud a la API

const API_KEY = 'f264a6f1f41af2ed5d7d17c8ecadffb8';
const LAT = '18.451726';
const LON = '-69.961452';
const START = '1683750197';
const END = '1683751197';

axios.get(`http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${LAT}&lon=${LON}&start=${START}&end=${END}&appid=${API_KEY}`)
  .then(response => {
    const data = response.data;
    // aquí procesas los datos de la respuesta de la API
    module.exports = data;//data deberia ir a app.js pero como la api no funciona no lo he hecho
  })
  .catch(error => {
    console.error('Error al obtener los datos de la API', error);
  });