"use client";

import Image from "next/image";
import { Checkbox, InputText } from "@/app/components/Input";
import Link from "next/link";
import { Button } from "@/app/components/Button";
import { useState } from "react";
import { LoginInputProps } from "@/app/interfaces/Form";

export default function Login() {
  const [form, setForm] = useState<LoginInputProps>({
    email: "",
    password: "",
    remember_me: true,
  });

  console.log(form, "form");

  const onChangeHandler = (
    value: string | boolean,
    field: "email" | "password" | "remember_me"
  ) => {
    setForm((prev) => {
      return { ...prev, [field]: value };
    });
  };
  return (
    <section className="flex max-h-screen min-h-screen overflow-y-hidden">
      <div className="w-1/2 h-screen">
        <div className="text-[#555] w-1/2 h-full flex flex-col justify-center items-center mx-auto">
          <div className="text-center">
            <span className="text-[35px] leading-normal tracking-[2px] flex">
              Trading <span className="text-[#007bff] font-bold">Journal</span>
            </span>
            <p className="text-[12px] leading-normal font-semibold tracking-[0.8px]">
              Record your every trade
            </p>
          </div>
          <form className="my-[20px] w-full">
            <InputText
              wrapperClass="border w-full p-[20px] rounded-t-md"
              inputAttributes={{
                className: "w-full outline-none",
                placeholder: "Email",
                onChange: (event) =>
                  onChangeHandler(event.target.value, "email"),
              }}
            />

            <InputText
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
                onChange={(value) => onChangeHandler(value, "remember_me")}
                checked={form.remember_me}
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
              buttonAttributes={{
                className: "leading-[20px] tracking-[3px] p-[20px] w-full",
                type: "submit",
              }}
            />
          </form>
        </div>
      </div>
      <div className="w-1/2 h-full">
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
