import { InputText } from "@/app/interfaces";

export default function InputText(props: InputText) {
  const {
    wrapperClass = "border w-full p-[20px] my-[20px] rounded-md",
    inputAttributes,
    label,
  } = props;
  return (
    <div className={wrapperClass}>
      {label && (
        <label className="flex gap-2">
          {label}
          <p
            className={`text-red-500 text-xl font-bold ${
              inputAttributes?.required ? "opacity-100" : "opacity-0"
            }`}
          >
            {" "}
            *{" "}
          </p>
        </label>
      )}
      <input {...inputAttributes} />
    </div>
  );
}
