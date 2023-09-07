"use client";

import { Button } from "@/app/components/Button";
import { DropdownSelect } from "@/app/components/Dropdown";
import { Input } from "@/app/components/Input";
import {
  sampleInstruments,
  samplePositions,
  sampleTradeStatus,
  sampleTradingSessions,
} from "@/app/lib/helper/dropdownlist";
import { useRouter } from "next/navigation";

export default function Add() {
  const router = useRouter();
  return (
    <section className="p-6 min-h-screen h-full w-full flex flex-col gap-8 font-raleway">
      <div className="bg-white h-full p-5 rounded-xl shadow-lg">
        <h1 className="text-2xl leading-normal tracking-[2px] text-[#007bff] font-bold">
          Add Trade
        </h1>
      </div>
      <div className="bg-white h-full p-5 rounded-xl shadow-lg text-[18px] gap-3 leading-normal tracking-[0.9px] text-[#555]">
        <form className="w-full flex flex-col gap-5">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <DropdownSelect
              wrapperClassName="w-full my-[10px]"
              selectClassName="border flex justify-between rounded-md p-[10px] cursor-pointer h-[48px]"
              optionWrapperClassName="bg-white shadow-md ease-in duration-[.2s] text-base text-[#555] font-light leading-6 z-40"
              items={sampleInstruments}
              noIcon
              label={<p className="font-semibold text-[14px]">Instrument</p>}
              required
            />
            <DropdownSelect
              wrapperClassName="w-full my-[10px]"
              selectClassName="border flex justify-between rounded-md p-[10px] cursor-pointer h-[48px]"
              optionWrapperClassName="bg-white shadow-md ease-in duration-[.2s] text-base text-[#555] font-light leading-6 z-30"
              items={samplePositions}
              noIcon
              label={<p className="font-semibold text-[14px]">Position</p>}
              required
            />
            <Input
              wrapperClass="w-full my-[10px] rounded-md"
              inputAttributes={{
                className: "outline-none border rounded-md p-[10px] w-full",
                required: true,
                type: "number",
              }}
              label={<p className="font-semibold text-[14px]">Entry Price</p>}
            />
            <Input
              wrapperClass="w-full my-[10px] rounded-md"
              inputAttributes={{
                className: "outline-none border rounded-md p-[10px] w-full",
                required: true,
                type: "number",
              }}
              label={<p className="font-semibold text-[14px]">Stop Loss</p>}
            />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Input
              wrapperClass="w-full my-[10px] rounded-md"
              inputAttributes={{
                className: "outline-none border rounded-md p-[10px] w-full",
                required: true,
                type: "number",
              }}
              label={<p className="font-semibold text-[14px]">Take Profit</p>}
            />
            <DropdownSelect
              wrapperClassName="w-full my-[10px]"
              selectClassName="border flex justify-between rounded-md p-[10px] cursor-pointer h-[48px]"
              optionWrapperClassName="bg-white shadow-md ease-in duration-[.2s] text-base text-[#555] font-light leading-6 z-20"
              items={sampleTradeStatus}
              noIcon
              label={<p className="font-semibold text-[14px]">Status</p>}
              required
            />

            <Input
              wrapperClass="w-full my-[10px] rounded-md"
              inputAttributes={{
                className: "outline-none border rounded-md p-[10px] w-full",
                type: "number",
              }}
              label={<p className="font-semibold text-[14px]">Profit/Loss</p>}
            />

            <Input
              wrapperClass="w-full my-[10px] rounded-md"
              inputAttributes={{
                className: "outline-none border rounded-md p-[10px] w-full",
                required: true,
                type: "number",
                step: 0.01,
              }}
              label={<p className="font-semibold text-[14px]">Lot</p>}
            />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <DropdownSelect
              wrapperClassName="w-full my-[10px]"
              selectClassName="border flex justify-between rounded-md p-[10px] cursor-pointer h-[48px]"
              optionWrapperClassName="bg-white shadow-md ease-in duration-[.2s] text-base text-[#555] font-light leading-6 z-10"
              items={sampleTradingSessions}
              noIcon
              label={<p className="font-semibold text-[14px]">Session</p>}
              required
            />
            <Input
              wrapperClass="w-full my-[10px] rounded-md"
              inputAttributes={{
                className: "outline-none border rounded-md p-[10px] w-full",
                required: true,
              }}
              label={<p className="font-semibold text-[14px]">Timeframe</p>}
            />
            <Input
              wrapperClass="w-full my-[10px] rounded-md"
              inputAttributes={{
                className: "outline-none border rounded-md p-[10px] w-full",
                required: true,
                type: "datetime-local",
              }}
              label={<p className="font-semibold text-[14px]">Date Open</p>}
            />

            <Input
              wrapperClass="w-full my-[10px] rounded-md"
              inputAttributes={{
                className: "outline-none border rounded-md p-[10px] w-full",
                type: "datetime-local",
              }}
              label={<p className="font-semibold text-[14px]">Date End</p>}
            />
          </div>

          <div className="flex justify-center sm:justify-end gap-5">
            <Button
              label="Add"
              className="my-[20px] text-center bg-[#007bff] rounded-md text-white font-semibold hover:bg-[#0059ff]"
              buttonAttributes={{ className: "w-full  py-[10px] px-10" }}
            />

            <Button
              label="Cancel"
              className="my-[20px] text-center text-red-500 border border-red-500 rounded-md font-semibold"
              buttonAttributes={{
                className: "w-full py-[10px] px-7",
                onClick: (event) => {
                  event.preventDefault();

                  router.back();
                },
              }}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
