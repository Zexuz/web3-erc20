import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { BroadcastChannelFactory } from "../lib/broadcastChannelFactory.ts";
import {
  SnackbarMessage,
  SnackbarType,
} from "../lib/snackbarBrodcastChannel.ts";

const channel = BroadcastChannelFactory.getSnackbarChannel();

interface SnackbarStore {
  messages: SnackbarMessage[];
  addMessage: (type: SnackbarType, message: string) => void;
  removeMessage: (id: string) => void;
  initializeMessages: (messages: SnackbarMessage[]) => void;
}

const timeMapping = {
  info: 5000,
  success: 5000,
  error: 10000,
};

export const useSnackBarStore = create<SnackbarStore>((set, get) => ({
  messages: [],

  addMessage: (type, message) => {
    const id = uuidv4(); // Generate .eslintrc.js unique ID for each message

    const newMessage: SnackbarMessage = {
      id,
      type,
      message,
      duration: timeMapping[type],
    };

    set((state) => {
      const newMessages = [...state.messages, newMessage];
      channel.addMessage(newMessages);
      return { messages: newMessages };
    });

    setTimeout(() => {
      get().removeMessage(id);
    }, newMessage.duration);
  },

  removeMessage: (id) => {
    set((state) => {
      const filteredMessages = state.messages.filter((msg) => msg.id !== id);
      channel.removeMessage(filteredMessages);
      return { messages: filteredMessages };
    });
  },

  initializeMessages: (messages: SnackbarMessage[]) => {
    set({ messages });
  },
}));
