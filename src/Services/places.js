import {apiKey} from '../config/privat';
const axios = require('axios');

async function getDoctor(keyword, lat, long){
        let endPoint = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
    +`location=${lat},${long}&radius=1500&type=doctor&keyword=${keyword}&key=${apiKey}`

      //axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
  //axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
 // CORS EXTERNO
   let proxy = 'https://cors-anywhere.herokuapp.com/'
    const response = await axios
    .get("https://9be9eb1b-3849-448e-83d8-022285d44c6a.mock.pstmn.io/doctors")
    console.log(response);
    return response;
}
async function getSchedule(id){
  const response = await axios
  .get(`https://9be9eb1b-3849-448e-83d8-022285d44c6a.mock.pstmn.io/doctors/${id}schedule`)
  console.log(response);
  return response;
}

async function createAppointment(date, hour, id){
  const response = await axios
  .post(`https://9be9eb1b-3849-448e-83d8-022285d44c6a.mock.pstmn.io/appointment`, {
    date: date,
    hour: hour,
    id: id
  })
  console.log(response);
  return response;

}
export default {getDoctor, getSchedule, createAppointment}; 