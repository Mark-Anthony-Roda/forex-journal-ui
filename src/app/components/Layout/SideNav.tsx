"use client";

import { NavBarMenu } from "@/app/lib/helper/navbarmenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className={`bg-white text-[#555] h-screen w-[20%]`}>
      <div className="flex justify-between items-center p-4">
        <span className="text-lg leading-normal flex">
          Trading <span className="text-[#007bff] font-bold">Journal</span>
        </span>
        {/* <div className="text-2xl mr-2">{isCollapsed ? "▶" : "◀"}</div> */}
      </div>
      <div className="p-4">
        <ul className="flex flex-col gap-6">
          {NavBarMenu.map((item, index) => {
            const {
              url,
              icon,
              label,
              wrapperClass = "flex items-center hover:text-[#007bff]",
              className = "mr-2 flex items-center text-center text-[18px] gap-3 leading-normal tracking-[0.9px]",
              activeClass = "text-[#007bff]",
            } = item;
            return (
              <li
                key={index}
                className={`${wrapperClass ?? ""} ${
                  pathname === url ? activeClass : ""
                }`}
              >
                <Link href={url} className={className}>
                  {icon}
                  <p>{label}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
