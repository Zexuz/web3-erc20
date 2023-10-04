interface ParagraphProps {
  text: string;
}

export const Paragraph = ({ text }: ParagraphProps) => {
  return <p className={"font-poppins text-sm font-medium"}>{text}</p>;
};
