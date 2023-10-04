import { SnackBarBroadcastChannel } from "./snackbarBrodcastChannel.ts";

export class BroadcastChannelFactory {
  static getSnackbarChannel(): SnackBarBroadcastChannel {
    const channel = BroadcastChannelFactory.createChannel("snackbar_channel");
    return new SnackBarBroadcastChannel(channel);
  }

  static createChannel(name: string) {
    return new BroadcastChannel(name);
  }
}
