import axios from "axios";

// Localhost
// const baseURL ='http://localhost:8080/' || 'https://vrnova-backend.herokuapp.com/' || 'http://204.236.221.166:8085/'; 
//const baseURL ='http://204.236.221.166:8085/'; 
//const baseURL ='http://localhost:8085/'; 
const baseURL = 'http://3.230.139.209:8085/';

// Server
//const baseURL ='https://vrnova-backend.herokuapp.com/';

export default axios.create({
  baseURL: baseURL,
  headers:{"Content-type": "application/json"} 
});
