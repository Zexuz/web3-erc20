import { Paragraph } from "../Paragraph";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className={`rounded-md bg-primary px-4 py-2 text-white`}
      onClick={onClick}
    >
      <Paragraph text={text} />
    </button>
  );
};
