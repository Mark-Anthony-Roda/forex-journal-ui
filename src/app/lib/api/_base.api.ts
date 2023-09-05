import axios from "axios";
import interseptorSetup from "./interceptor";
import UseSWR from "swr";

interseptorSetup(axios);

export default class BaseApi {
  static async get(URL: string) {
    try {
      const response = await axios.get(URL);

      return response;
    } catch (error) {
      throw error;
    }
  }

  static async post(URL: string, data: Object) {
    try {
      const response = await axios.post(URL, data);

      return response;
    } catch (error) {
      throw error;
    }
  }
  static async put(URL: string, data: Object) {
    try {
      const response = await axios.put(URL, data);

      return response;
    } catch (error) {
      throw error;
    }
  }
  static async patch(URL: string, data: Object) {
    try {
      const response = await axios.patch(URL, data);

      return response;
    } catch (error) {
      throw error;
    }
  }

  static async delete(URL: string) {
    try {
      const response = await axios.delete(URL);

      return response;
    } catch (error) {
      throw error;
    }
  }

  static swr(URL: string, condition: boolean = true, options: any = {}) {
    const fetcher = async (link: string) => BaseApi.get(link);
    const { data, mutate, isValidating } = UseSWR(
      condition ? URL : null,
      fetcher,
      options
    );

    return {
      data: data ? data.data : data,
      mutate,
      isValidating,
    };
  }
}
