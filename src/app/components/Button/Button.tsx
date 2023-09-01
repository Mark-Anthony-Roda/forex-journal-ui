import { ButtonProp } from "@/app/interfaces";

export default function Button(props: ButtonProp) {
  const {
    className = "w-full my-[20px] text-center bg-[#007bff] rounded-md text-white font-semibold hover:bg-[#0059ff]",
    label,
    buttonAttributes,
  } = props;
  return (
    <div className={className}>
      <button {...buttonAttributes}>{label}</button>
    </div>
  );
}
