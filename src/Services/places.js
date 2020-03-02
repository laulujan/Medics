import {apiKey} from '../config/privat';
const axios = require('axios');

async function getDoctor(keyword, lat, long){
        let endPoint = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
    +`location=${lat},${long}&radius=1500&type=doctor&keyword=${keyword}&key=${apiKey}`

      //axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
  //axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
 
   let proxy = 'https://cors-anywhere.herokuapp.com/'
    const response = await axios
    .get(proxy+endPoint)
    console.log(response);
    return response;
}

export default getDoctor;