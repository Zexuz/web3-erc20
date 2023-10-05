interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return <span className={"font-poppins text-4xl font-semibold"}>{text}</span>;
};
