import { InputText } from "@/app/interfaces";

export default function InputText(props: InputText) {
  const {
    wrapperClass = "border w-full p-[20px] my-[20px] rounded-md",
    inputAttributes,
  } = props;
  return (
    <div className={wrapperClass}>
      <input {...inputAttributes} />
    </div>
  );
}
