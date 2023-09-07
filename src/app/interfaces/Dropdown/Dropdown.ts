import { ReactNode } from "react";

export interface DropdownListProps {
  label?: string | ReactNode;
  value: string | ReactNode;
  className?: string;
}

export interface DropdownSelectProps {
  placeholder?: string | ReactNode;
  items: DropdownListProps[];
  activeItem?: string | number | ReactNode;
  wrapperClassName?: string;
  selectClassName?: string;
  optionClassName?: string;
  optionWrapperClassName?: string;
  optionActiveClassName?: string;
  onSelect?: Function;
  onCollapse?: Function;
  noIcon?: boolean;
  icon?: ReactNode;
  label?: string | ReactNode;
  required?: boolean;
}
