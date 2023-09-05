import { LoginInputProps } from "@/app/interfaces/Form";
import NoauthApi from "./_noauth.api";
import BaseApi from "./_base.api";

const APIDOMAIN = process.env.NEXT_PUBLIC_FOREX_JOURNAL_API;

export default class Auth {
  static async login(payload: LoginInputProps) {
    try {
      const response = await NoauthApi.post(APIDOMAIN + "/v1/login", payload);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async authUser() {
    const data = await BaseApi.get(APIDOMAIN + "/v1/me");

    return data;
  }
}
