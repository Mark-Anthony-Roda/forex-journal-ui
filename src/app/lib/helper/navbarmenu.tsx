import { BriefCase } from "@/app/icons/Bag";
import { BarChart, Dashboard } from "@/app/icons/Chart";
import { List } from "@/app/icons/List";
import { Settings } from "@/app/icons/Tools";
import { SideNavMenuProps } from "@/app/interfaces/Navigation";

export const NavBarMenu: SideNavMenuProps[] = [
  {
    url: "/",
    icon: <Dashboard />,
    label: "Dashboard",
  },
  {
    url: "/trades",
    icon: <List />,
    label: "Trades",
  },
  {
    url: "/reports",
    icon: <BarChart />,
    label: "Reports",
  },
  {
    url: "/accounts",
    icon: <BriefCase />,
    label: "Accounts",
  },
  {
    url: "/settings",
    icon: <Settings />,
    label: "Settings",
  },
];
