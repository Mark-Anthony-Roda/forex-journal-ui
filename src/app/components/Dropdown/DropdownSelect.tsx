import { Fragment, useState } from "react";
import {
  DropdownListProps,
  DropdownSelectProps,
} from "@/app/interfaces/Dropdown";
import { KeyBoardArrowLeft } from "@/app/icons/Arrow";

export default function DropdownSelect(props: DropdownSelectProps) {
  const {
    items,
    placeholder,
    activeItem,
    wrapperClassName = "min-w-[270px]",
    selectClassName = "flex justify-between p-[10px] bg-white w-full text-[#555] drop-shadow-sm cursor-pointer",
    optionClassName = "p-[10px] hover:bg-[#EFEFEF]",
    optionActiveClassName = "bg-[#EFEFEF]",
    optionWrapperClassName = "bg-white shadow-md ease-in duration-[.2s] text-base text-[#555] font-light leading-6",
    onSelect,
    onCollapse,
    noIcon = false,
    icon,
    label,
    required,
  } = props;

  const [collapse, setCollapse] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<DropdownListProps | undefined>(
    items.find((item) => item.value === activeItem)
  );

  const collapseHandler = () => {
    if (onCollapse) onCollapse();
    setCollapse((prev) => {
      return !prev;
    });
  };

  const selectHandler = (item: DropdownListProps) => {
    if (onSelect) onSelect(item);
    setActiveMenu(item);
    setCollapse(false);
  };

  return (
    <div className={wrapperClassName}>
      <div className="relative">
        {label && (
          <label className="flex gap-2">
            {label}
            {required && <p className="text-red-500 text-xl font-bold"> * </p>}
          </label>
        )}
        <div className={selectClassName} onClick={collapseHandler}>
          <p>{activeMenu?.label ?? placeholder ?? ""}</p>
          {!noIcon && (
            <Fragment>
              {icon ?? (
                <KeyBoardArrowLeft
                  className={`transform ${
                    collapse ? "rotate-90" : "-rotate-90"
                  } cursor-pointer p-1.5 duration-[.2s]`}
                />
              )}
            </Fragment>
          )}
        </div>

        <ul
          className={`${
            collapse
              ? "opacity-100 translate-y-[0]"
              : "invisible opacity-0 translate-y-[-20px]"
          } absolute w-full top-[105%] left-0 z-20 ${optionWrapperClassName}`}
        >
          {items.map((item, index) => {
            return (
              <li
                key={index}
                className={`cursor-pointer ${optionClassName} ${
                  item.value === activeMenu?.value ? optionActiveClassName : ""
                }`}
                onClick={() => selectHandler(item)}
              >
                {item?.label ?? item.value}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
