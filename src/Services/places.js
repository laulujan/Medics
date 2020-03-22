const axios = require('axios');
const url = 'localhost:9000';

async function getDoctor(keyword, lat, long){
  
    const response = await axios
    .get(`http://${url}/doctors/list/${lat}/${long}/${keyword}`)
    return response;
}
async function getSchedule(id){
  const response = await axios
  .get(`http://${url}/doctors/${id}/schedule`)
  return response;
}

async function createAppointment(data){
  const response = await axios
  .post(`http://${url}/appointments`, {
    fecha: data.fecha,
    hora: parseInt(data.hora),
    idDoctor: parseInt(data.idDoctor)
  })
  return response;

}
async function getAppointments(id){
  const response = await axios
  .get(`http://${url}/appointments/list/${id}`)
  return response;
}
async function cancelAppointment(id){
  const response = await axios
  .put(`http://${url}/appointments/cancel/${id}`)
  return response;
}

async function deleteAppointment(id){
  const response = await axios
  .put(`http://${url}/appointments/delete/${id}`)
  return response;
}

export default {getDoctor, getSchedule, createAppointment, getAppointments, cancelAppointment, deleteAppointment}; 

