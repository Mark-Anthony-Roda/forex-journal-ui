import { ReactNode } from "react";

export interface SideNavMenuProps {
  url: string;
  icon?: ReactNode;
  label?: string;
  children?: SideNavMenuProps[];
  wrapperClass?: string;
  className?: string;
  activeClass?: string;
}
