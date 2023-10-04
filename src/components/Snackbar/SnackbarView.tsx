import { ProgressBar } from "../ProgessBar";
import { CloseButton } from "../ButtonClose";

export interface SnackbarMessage {
  id: string;
  type: string;
  message: string;
  duration: number;
}

interface SnackbarViewProps {
  messages: SnackbarMessage[];
  removeMessage: (id: string) => void;
}

const levelMap: Record<string, string> = {
  info: "bg-primary",
  success: "bg-green-700",
  error: "bg-red-500",
};

export const SnackbarView = ({
  messages,
  removeMessage,
}: SnackbarViewProps) => {
  return (
    <div className="fixed right-0 top-0 space-y-2 p-4">
      {messages.map(({ id, type, message, duration }) => (
        <div
          key={id}
          className={`rounded p-2 text-white shadow-lg ${levelMap[type]}`}
        >
          <span>{message}</span>
          <CloseButton onClick={() => removeMessage(id)} />
          <ProgressBar duration={duration} />
        </div>
      ))}
    </div>
  );
};
