"use client";

import { Button } from "@/app/components/Button";
import { Plus } from "@/app/icons/Operation";
import { TradeTableColumnProp } from "@/app/interfaces/Trade";
import { Checkbox } from "@/app/components/Input";
import { Trade } from "@/app/interfaces/Model";
import { ArrowDown, ArrowUp } from "../icons/Arrow";
import { Table } from "../components/Table";
import { useRouter } from "next/navigation";

export default function Trades() {
  const router = useRouter();
  const columns: TradeTableColumnProp[] = [
    {
      columnName: "selectAll",
      label: <Checkbox />,
      render: () => <Checkbox />,
    },
    {
      columnName: "action",
      label: "Action",
      render: (trade: Trade) => (
        <div className="flex justify-center items-center">
          {trade.action === "Buy" ? (
            <ArrowUp className="text-green-500" />
          ) : (
            <ArrowDown className="text-red-500" />
          )}
        </div>
      ),
    },
    {
      label: "Status",
      columnName: "status",
      render: (trade: Trade) => {
        const statusClass =
          trade.status === "Win"
            ? "bg-green-500"
            : trade.status === "Lose"
            ? "bg-red-500"
            : trade.status === "Pending"
            ? "bg-orange-500"
            : trade.status === "On going"
            ? "bg-[#0059ff]"
            : "bg-gray-500";

        return (
          <div
            className={`${statusClass} px-2 py-2 w-min sm:w-full mx-auto rounded-full sm:rounded text-white flex justify-center text-center items-center`}
          >
            <p className="text-center hidden sm:flex">{trade.status}</p>
          </div>
        );
      },
    },
    {
      label: "Instrument",
      columnName: "instrument",
    },
    {
      columnName: "openDate",
      label: "Open Date",
      responsive: "hide",
      className: "hidden sm:table-cell",
    },
    {
      columnName: "entry",
      label: "Entry Price",
      responsive: "hide",
      className: "hidden md:table-cell",
    },
    {
      columnName: "lot",
      label: "Lot",
      responsive: "hide",
      className: "hidden sm:table-cell",
    },
    {
      columnName: "closeDate",
      label: "Close Date",
      responsive: "hide",
      className: "hidden md:table-cell",
    },
    {
      columnName: "closePrice",
      label: "Close Price",
      render: (trade: Trade) =>
        trade.closePrice ? `$${trade.closePrice}` : "--",
      responsive: "hide",
      className: "hidden md:table-cell",
    },
    {
      columnName: "profit",
      label: "Profit",
      render: (trade: Trade) => {
        const profitClass =
          trade.profit !== undefined
            ? trade.profit < 0
              ? "bg-red-500"
              : trade.profit > 0
              ? "bg-green-500"
              : "bg-gray-500"
            : "";

        return trade.profit !== undefined ? (
          <span
            className={`${profitClass} p-1 rounded text-white`}
          >{`$${trade.profit}`}</span>
        ) : (
          "--"
        );
      },
    },
  ];

  const dummyData: Trade[] = [
    {
      action: "Sell",
      status: "Win",
      instrument: "NZD/USD",
      openDate: "09/04/2023 3:00 PM",
      entry: 0.59555,
      lot: 0.01,
      closeDate: "09/05/2023 9:25 AM",
      closePrice: 0.593,
      profit: 2.59,
    },
    {
      action: "Sell",
      status: "Break even",
      instrument: "NZD/USD",
      openDate: "09/04/2023 3:00 PM",
      entry: 0.59555,
      lot: 0.01,
      closeDate: "09/05/2023 9:25 AM",
      closePrice: 0.593,
      profit: 0.0,
    },
    {
      action: "Buy",
      status: "On going",
      instrument: "NZD/USD",
      openDate: "09/04/2023 3:00 PM",
      entry: 0.59555,
      lot: 0.01,
      closeDate: "09/05/2023 9:25 AM",
      closePrice: 0.593,
      profit: 2.59,
    },
    {
      action: "Sell",
      status: "Lose",
      instrument: "NZD/USD",
      openDate: "09/04/2023 3:00 PM",
      entry: 0.59555,
      lot: 0.01,
      closeDate: "09/05/2023 9:25 AM",
      closePrice: 0.593,
      profit: -2.59,
    },
    {
      action: "Sell",
      status: "Pending",
      instrument: "NZD/USD",
      openDate: "09/04/2023 3:00 PM",
      entry: 0.59555,
      lot: 0.01,
      closeDate: "09/05/2023 9:25 AM",
      closePrice: 0.593,
      profit: 2.59,
    },
  ];
  return (
    <section className="p-6 min-h-screen h-full w-full flex flex-col gap-8 font-raleway">
      <div className="bg-white h-full p-5 rounded-xl shadow-lg flex justify-between items-center">
        <h1 className="text-2xl leading-normal tracking-[2px] text-[#007bff] font-bold">
          Trades
        </h1>
        <Button
          label={
            <div className="flex gap-3 justify-center items-center text-white text-[16px] leading-[23px] tracking-[0.48px]">
              <Plus /> Add Trade
            </div>
          }
          className={`bg-[#007bff] hover:bg-[#0059ff] text-center rounded-md text-white font-semibold`}
          buttonAttributes={{
            className: `leading-[20px] tracking-[3px] px-[20px] py-[10px] w-full text-xs`,
            onClick: () => router.push("/trades/add"),
          }}
        />
      </div>
      <div className="bg-white h-full p-5 rounded-xl shadow-lg">
        <Table columns={columns} items={dummyData} />
      </div>
    </section>
  );
}
