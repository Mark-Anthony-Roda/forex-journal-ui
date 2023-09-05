import axios from "axios";
import UseSWR from "swr";

export default class NoauthApi {
  static async get(URL: string) {
    return await axios.get(URL);
  }

  static async post(URL: string, data: Object) {
    try {
      const response = await axios.post(URL, data);

      return response;
    } catch (error) {
      throw error;
    }
    // return await axios.post(URL, data).then(
    //   (response) => {
    //     return response;
    //   },
    //   (error) => {
    //     throw error;
    //   }
    // );
  }
  static async put(URL: string, data: Object) {
    try {
      const response = await axios.put(URL, data);

      return response;
    } catch (error) {
      throw error;
    }
    // return await axios.put(URL, data).then(
    //   (response) => {
    //     return response;
    //   },
    //   (error) => {
    //     throw error;
    //   }
    // );
  }
  static async patch(URL: string, data: Object) {
    try {
      const response = await axios.patch(URL, data);

      return response;
    } catch (error) {
      throw error;
    }
    // return await axios.patch(URL, data).then(
    //   (response) => {
    //     return response;
    //   },
    //   (error) => {
    //     throw error;
    //   }
    // );
  }

  static async delete(URL: string) {
    try {
      const response = await axios.delete(URL);

      return response;
    } catch (error) {
      throw error;
    }
    // return await axios.delete(URL).then(
    //   (response) => {
    //     return response;
    //   },
    //   (error) => {
    //     throw error;
    //   }
    // );
  }

  static swr(URL: string, options: any = {}) {
    const fetcher = (link: string) => this.get(link);
    const render = options.hasOwnProperty("render") ? options.render : true;
    const { data, mutate, isValidating, error } = UseSWR(
      render ? URL : null,
      fetcher,
      options
    );
    return {
      data: data ? data.data : data,
      mutate,
      isValidating,
      error,
    };
  }
}
