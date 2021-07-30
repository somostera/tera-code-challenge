import axios from "axios";

const URL_DOMAIN = process.env.REACT_APP_API_DOMAIN;

export default axios.create({
  baseURL: `${URL_DOMAIN}/url-tera-code-challenge`,
  headers: {
    "Content-type": "application/json"
  }
});