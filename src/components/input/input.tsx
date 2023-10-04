interface InputProps {
  placeholder: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ onChange, label, placeholder }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} onChange={onChange} />
    </>
  );
};
