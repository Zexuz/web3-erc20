import { Paragraph } from "../paragraph";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className={`bg-primary rounded-md px-4 py-2 text-white`}
      onClick={onClick}
    >
      <Paragraph text={text} />
    </button>
  );
};
