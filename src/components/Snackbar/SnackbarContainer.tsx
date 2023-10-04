import { useEffect } from "react";
import { useSnackBarStore } from "../../store/snackbar.ts";
import { BroadcastChannelFactory } from "../../lib/broadcastChannelFactory.ts";
import { SnackbarView } from "./SnackbarView.tsx";

export const SnackbarContainer = () => {
  const messages = useSnackBarStore((state) => state.messages);
  const removeMessage = useSnackBarStore((state) => state.removeMessage);
  const initializeMessages = useSnackBarStore(
    (state) => state.initializeMessages,
  );

  useEffect(() => {
    const channel = BroadcastChannelFactory.getSnackbarChannel();
    channel.onMessage((incomingMessages) => {
      initializeMessages(incomingMessages);
    });

    return () => {
      channel.close();
    };
  }, []);

  return <SnackbarView messages={messages} removeMessage={removeMessage} />;
};
