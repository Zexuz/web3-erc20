import { Paragraph } from "../Paragraph";

interface ButtonProps {
  text: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export const Button = ({ text, onClick, isLoading, disabled }: ButtonProps) => {
  return (
    <button
      className={`relative flex w-full items-center justify-center rounded-md px-4 py-2 text-white 
                 ${disabled ? "cursor-not-allowed bg-gray-400" : "bg-primary"}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <Paragraph text={text} />
      {isLoading && <div className="absolute right-4 loader" />}
    </button>
  );
};
