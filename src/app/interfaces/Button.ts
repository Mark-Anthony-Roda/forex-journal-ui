import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProp {
  className?: string;
  label?: String | ReactNode;
  buttonAttributes?: ButtonHTMLAttributes<HTMLButtonElement>;
}
