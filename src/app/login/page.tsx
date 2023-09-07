"use client";

import Image from "next/image";
import { Checkbox, Input } from "@/app/components/Input";
import Link from "next/link";
import { Button } from "@/app/components/Button";
import { FormEvent, useState } from "react";
import { LoginInputProps } from "@/app/interfaces/Form";
import Auth from "../lib/api/auth";
import { setCookie } from "nookies";
import { useRouter } from "next/navigation";

export default function Login() {
  const [form, setForm] = useState<LoginInputProps>({
    email: "",
    password: "",
    remember: true,
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const router = useRouter();

  // 86,400,000
  const onChangeHandler = (
    value: string | boolean,
    field: "email" | "password" | "remember"
  ) => {
    setForm((prev) => {
      return { ...prev, [field]: value };
    });
  };

  const onSubmitHandler = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      if (submitting) return;
      setSubmitting(true);
      const response = await Auth.login(form);

      const token = response.token;

      setCookie({}, "token", token, {
        maxAge: form.remember ? 2592000000 : 86400000,
      });

      router.push("/");
    } catch (error) {
      console.log(error, "error");
    }
  };

  const disableButton = submitting || form.email === "" || form.password === ""

  return (
    <section className="flex max-h-screen min-h-screen overflow-y-hidden bg-white">
      <div className="w-full md:w-1/2 px-4 h-screen flex flex-col items-center">
        <div className="text-[#555] w-full sm:w-4/5 md:1/2 h-full flex flex-col justify-center items-center mx-auto">
          <div className="text-center">
            <span className="text-[35px] leading-normal flex">
              Trading <span className="text-[#007bff] font-bold">Journal</span>
            </span>
            <p className="text-[12px] leading-normal font-semibold tracking-[0.8px]">
              Record your every trade
            </p>
          </div>
          <form className="my-[20px] w-full" onSubmit={onSubmitHandler}>
            <Input
              wrapperClass="border w-full p-[20px] rounded-t-md"
              inputAttributes={{
                className: "w-full outline-none",
                placeholder: "Email",
                onChange: (event) =>
                  onChangeHandler(event.target.value, "email"),
              }}
            />

            <Input
              wrapperClass="border border-t-0 w-full p-[20px] rounded-b-md"
              inputAttributes={{
                className: "w-full outline-none",
                placeholder: "Password",
                type: "password",
                onChange: (event) =>
                  onChangeHandler(event.target.value, "password"),
              }}
            />

            <div className="w-full my-[20px] flex justify-between">
              <Checkbox
                label="Remember me"
                onChange={(value) => onChangeHandler(value, "remember")}
                checked={form.remember}
              />

              <Link
                href="#"
                className="leading-normal text-[12px] tracking-[0.8px] hover:underline hover:underline-offset-8 hover:text-[#007bff] hover:duration-500"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              label="SIGN IN"
              className={`${
                disableButton ? "bg-[#9dcafa]" : "bg-[#007bff] hover:bg-[#0059ff]"
              } w-full my-[20px] text-center rounded-md text-white font-semibold`}
              buttonAttributes={{
                className: `leading-[20px] tracking-[3px] p-[20px] w-full ${
                  disableButton && "cursor-not-allowed"
                }`,
                type: "submit",
                disabled:
                  disableButton,
              }}
            />
          </form>
        </div>
      </div>
      <div className="w-1/2 h-screen hidden md:flex">
        <Image
          src="/img/login/I-have-a-plan.webp"
          alt="I have a plan"
          width={100}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
