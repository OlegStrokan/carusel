import axios from 'axios';


const baseURL = "https://web-task-api.herokuapp.com/api/v1/";

export const instance = axios.create({
  baseURL,
})
