require("dotenv").config();

const api = {
  API_ENDPOINT: "https://frozen-taiga-13619.herokuapp.com/api",
  API_KEY: process.env.REACT_APP_API_KEY,
  TOKEN_KEY: process.env.TOKEN_KEY,
};

export default api;

// http://localhost:8000/api
