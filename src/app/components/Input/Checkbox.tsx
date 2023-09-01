import { Check } from "@/app/icons/Check";
import { CheckboxProp } from "@/app/interfaces";
import { Fragment, useState } from "react";

export default function Checkbox(props: CheckboxProp) {
  const [isChecked, setIsChecked] = useState<boolean>(props.checked ?? false);

  const {
    label,
    wrapperClass = "flex gap-2 text-[#555] items-center",
    className = `${
      isChecked ? "text-white bg-[#007bff]" : "text-[#555] bg-gray-100"
    } rounded-md`,
    checkboxClass = "w-5 h-5 p-1",
    onChange,
    labelClass = "leading-normal text-[12px] tracking-[0.8px]",
  } = props;

  const toggleHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={wrapperClass}>
      <div
        className={`${className} cursor-pointer`}
        onClick={() => {
          if (onChange) {
            onChange(!isChecked);
          }
          toggleHandler();
        }}
      >
        <Check className={checkboxClass} />
      </div>
      {label && (
        <Fragment>
          {typeof label === "string" ? (
            <span className={labelClass}>{label}</span>
          ) : (
            label
          )}
        </Fragment>
      )}
    </div>
  );
}
