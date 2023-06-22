import axios from "axios";

const API = axios.create({ baseURL: "https://daeda.azurewebsites.net/" });

export default API;
