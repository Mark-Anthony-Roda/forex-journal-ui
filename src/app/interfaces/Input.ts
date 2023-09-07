import { InputHTMLAttributes, ReactNode } from "react";

export interface InputText {
  wrapperClass?: string;
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
  label?: string | ReactNode;
}

export interface CheckboxProp {
  label?: string | ReactNode;
  labelClass?: string;
  wrapperClass?: string;
  className?: string;
  checkboxClass?: string;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
}
