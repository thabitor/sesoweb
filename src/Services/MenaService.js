import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/api/mena';

export const listMena = () => axios.get(REST_API_BASE_URL);
