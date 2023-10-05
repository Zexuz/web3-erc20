import React from "react";

interface InputProps {
  placeholder: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  initialValue?: string | number;
  disabled?: boolean;
  isValueValid?: boolean;
  errorMessage?: string;
}

export const Input = ({
  onChange,
  label,
  placeholder,
  initialValue,
  disabled,
  isValueValid = true,
  errorMessage,
}: InputProps) => {
  const [value, setValue] = React.useState(initialValue);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e);
  };

  const errorClasses = !isValueValid
    ? "text-red-700 dark:text-red-500 mb-2 block"
    : "";

  const disabledClasses = disabled ? "cursor-not-allowed bg-gray-200" : "";

  const errorInputClasses = !isValueValid
    ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
    : "";

  const baseClasses =
    "rounded-lg border p-2.5 text-gray-200 focus:border-primary focus:outline-none text-sm bg-blue-300 focus:ring-2 focus:ring-blue-400";

  return (
    <div className={"flex w-full flex-col space-y-2"}>
      <label className={`font-poppins text-sm font-medium ${errorClasses}`}>
        {label}
      </label>
      <input
        type="text"
        className={`${baseClasses} ${errorInputClasses} ${disabledClasses}`}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        disabled={disabled}
      />
      {!isValueValid && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-poppins text-sm font-medium">Oh, snapp! </span>
          <span className="font-poppins text-sm"> {errorMessage}</span>
        </p>
      )}
    </div>
  );
};
