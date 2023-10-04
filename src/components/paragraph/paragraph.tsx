interface ParagraphProps {
  text: string;
}

export const Paragraph = ({ text }: ParagraphProps) => {
  return <span className={"font-poppins text-sm font-medium"}>{text}</span>;
};
