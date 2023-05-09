import axios from "axios";

const baseURL = "https://api.github.com";

export const gitHubApi = axios.create({
  baseURL,
  timeout: 10000,
});
