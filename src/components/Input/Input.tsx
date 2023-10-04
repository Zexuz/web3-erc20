import React from "react";

interface InputProps {
  placeholder: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  initialValue?: string | number;
  disabled?: boolean;
}

export const Input = ({
  onChange,
  label,
  placeholder,
  initialValue,
  disabled,
}: InputProps) => {
  const [value, setValue] = React.useState(initialValue);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e);
  };

  return (
    <div className={"flex w-full flex-col space-y-2"}>
      <label className={"font-poppins text-sm font-medium"}>{label}</label>
      <input
        className={"text-blue-600"}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
        disabled={disabled}
      />
    </div>
  );
};
