// import {apiKey} from '../config/privat';
const axios = require('axios');
const url = 'localhost:9000';

async function getDoctor(keyword, lat, long){
  
    const response = await axios
    .get(`http://${url}/doctors/list/${lat}/${long}/${keyword}`)
    console.log(response);
    return response;
}
async function getSchedule(id){
  const response = await axios
  .get(`http://${url}/doctors/${id}/schedule`)
  console.log(response);
  return response;
}

async function createAppointment(data){
  const response = await axios
  .post(`http://${url}/appointments`, {
    fecha: data.fecha,
    hora: parseInt(data.hora),
    idDoctor: parseInt(data.idDoctor)
  })
  console.log(response);
  return response;

}
export default {getDoctor, getSchedule, createAppointment}; 