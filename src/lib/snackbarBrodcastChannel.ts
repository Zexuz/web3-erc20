export type SnackbarType = "info" | "success" | "error";

export interface SnackbarMessage {
  id: string;
  type: SnackbarType;
  message: string;
  duration: number;
}

type OnMessageCallback = (messages: SnackbarMessage[]) => void;

export class SnackBarBroadcastChannel {
  private readonly channel: BroadcastChannel;

  constructor(channel: BroadcastChannel) {
    this.channel = channel;
  }

  addMessage(messages: SnackbarMessage[]) {
    this.channel.postMessage({ type: "ADD", messages });
  }

  removeMessage(filteredMessage: SnackbarMessage[]) {
    this.channel.postMessage({ messages: filteredMessage, type: "REMOVE" });
  }

  onMessage(callback: OnMessageCallback) {
    this.channel.onmessage = (event: MessageEvent) => {
      if (!(event.data && event.data.messages)) {
        return;
      }

      callback(event.data.messages);
    };
  }

  close() {
    this.channel.close();
  }
}
