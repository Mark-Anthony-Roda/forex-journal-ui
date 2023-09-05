import { AxiosStatic, InternalAxiosRequestConfig } from "axios";
import { parseCookies } from "nookies";

export default function setup(axios: AxiosStatic) {
  axios.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    const cookies = parseCookies();

    const { token } = cookies;

    config.headers["Authorization"] = `Bearer ` + token;
    config.headers["Content-Type"] = "application/json";
    config.headers["Strict-Transport-Security"] = "max-age=31536000";

    return config;
  });

  axios.interceptors.response.use(
    (response) => {
      return Promise.resolve(response);
    },
    (error) => {
      // const { data, status, statusText } = error.response;
      // Error callback here
      // global popup notification
      return Promise.reject(error.response);
    }
  );
}
