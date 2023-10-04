import { CloseIcon } from "../Icons/CloseIcon";

export const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="float-right text-white"
      onClick={onClick}
      aria-label={"Close"}
    >
      <CloseIcon />
    </button>
  );
};
