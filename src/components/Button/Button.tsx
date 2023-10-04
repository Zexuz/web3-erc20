import { Paragraph } from "../Paragraph";

interface ButtonProps {
  text: string;
  onClick: () => void;
  isLoading?: boolean;
}

export const Button = ({ text, onClick, isLoading }: ButtonProps) => {
  return (
    <button
      className={`relative flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-white`}
      onClick={onClick}
    >
      <Paragraph text={text} />
      {isLoading && <div className="loader absolute right-4" />}
    </button>
  );
};
