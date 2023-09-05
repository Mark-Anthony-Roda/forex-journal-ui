import useSWR from "swr";
import axios from "axios";
import interseptorSetup from "@/app/lib/api/interceptor";

interseptorSetup(axios);

const APIDOMAIN = process.env.NEXT_PUBLIC_FOREX_JOURNAL_API;

export function useRequest(URL: string, { ...config } = {}) {
  return useSWR(
    URL ? APIDOMAIN + URL : null,
    () =>
      axios(APIDOMAIN + URL).then((response) => {
        if (response?.data?.data && !response?.data?.meta)
          return response?.data?.data;
        return response?.data;
      }),
    {
      ...config,
    }
  );
}
