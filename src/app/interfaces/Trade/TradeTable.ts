import { ReactNode } from "react";

export interface TradeTableColumnProp {
  label: string | ReactNode;
  className?: string;
  render?: Function;
  columnName: string | number;
  responsive?: "show" | "hide";
}
