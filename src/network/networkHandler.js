

// post request
import axios from "axios";

// const  Host=process.env.REACT_APP_HOST

// const Host = "http://127.0.0.1:5001/api";

const Host ="https://abhiranjan-portfolio-backed.onrender.com/api"


export const RegisterUser =(data) => {
    let config = {
      url: `${Host}/register`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    };
    return axios.post(config.url, config.data, { headers: config.headers });
  };
