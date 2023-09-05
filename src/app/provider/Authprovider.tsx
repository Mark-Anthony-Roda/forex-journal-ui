"use client";
import { SWRConfig } from "swr";
import { useRequest } from "../hooks";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import Auth from "../lib/api/auth";
export const AuthProvider = ({ children }: any) => {
  const noAuthPages = useMemo(() => ["/login"], []);
  const pathname = usePathname();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);

  const authUser = useCallback(async () => {
    if (!loading) setLoading(true);
    try {
      const response = await Auth.authUser();

      if (response.data.user && noAuthPages.includes(pathname)) {
        router.push("/");
      }
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } catch (error: any) {
      if (error?.data?.code === 401 && !noAuthPages.includes(pathname)) {
        router.push("/login");
      }
      setTimeout(() => {
        setLoading(false);
      }, 300);

      console.log(error);
    }
    // eslint-disable-next-line
  }, [router, pathname, noAuthPages]);

  useEffect(() => {
    authUser();
  }, [authUser]);

  if (loading)
    return (
      <Fragment>
        <div className="flex text-[#007bff] justify-center items-center h-screen w-full text-6xl">
          Loading...
        </div>
      </Fragment>
    );

  return <Fragment>{children}</Fragment>;
};
