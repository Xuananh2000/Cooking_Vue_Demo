import axios from 'axios'
import {handleResponse, handleError} from "../utils/http-handler";
import {COOKIES} from "@/constants";
import VueCookies from "vue-cookies";

const BASE_URL = process.env.VUE_APP_SERVE_API

console.log('BASE_URL', BASE_URL)

const rmAxios = axios.create({
  baseURL: BASE_URL
})
rmAxios.defaults.headers.post['Content-Type'] = 'application/json'
rmAxios.defaults.headers.put['Content-Type'] = 'application/json-patch+json'
rmAxios.interceptors.request.use(function (config) {
  const token = VueCookies.get(COOKIES.accessToken);
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

rmAxios.interceptors.request.use(config => config, (error) => Promise.reject(error))
rmAxios.interceptors.response.use(res => handleResponse(res), error => handleError(error))

export default rmAxios