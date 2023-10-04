interface InputProps {
  placeholder: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ onChange, label, placeholder }: InputProps) => {
  return (
    <div className={"flex flex-col space-y-2"}>
      <label className={"font-poppins text-sm font-medium"}>{label}</label>
      <input
        className={"text-blue-600"}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
