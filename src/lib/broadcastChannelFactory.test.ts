import {
  SnackBarBroadcastChannel,
  SnackbarMessage,
} from "./snackbarBrodcastChannel.ts";

const mockChannel = {
  postMessage: jest.fn(),
  onmessage: jest.fn(),
  close: jest.fn(),
};

describe("SnackBarBroadcastChannel", () => {
  let snackBarChannel: SnackBarBroadcastChannel;

  beforeEach(() => {
    snackBarChannel = new SnackBarBroadcastChannel(mockChannel as any);
  });

  it("should add message", () => {
    const messages: SnackbarMessage[] = [
      {
        id: "1",
        type: "info",
        message: "test message",
        duration: 3000,
      },
    ];

    snackBarChannel.addMessage(messages);
    expect(mockChannel.postMessage).toHaveBeenCalledWith({
      type: "ADD",
      messages,
    });
  });

  it("should remove message", () => {
    const messages: SnackbarMessage[] = [
      {
        id: "1",
        type: "error",
        message: "test message",
        duration: 3000,
      },
    ];

    snackBarChannel.removeMessage(messages);
    expect(mockChannel.postMessage).toHaveBeenCalledWith({
      type: "REMOVE",
      messages,
    });
  });

  it("should handle onMessage callback", () => {
    const mockCallback = jest.fn();
    snackBarChannel.onMessage(mockCallback);

    const event = new MessageEvent("message", {
      data: {
        type: "ADD",
        messages: [{ id: "1", type: "success", message: "hi", duration: 1000 }],
      },
    });

    mockChannel.onmessage?.(event);

    expect(mockCallback).toHaveBeenCalledWith([
      { id: "1", type: "success", message: "hi", duration: 1000 },
    ]);
  });

  it("should close the channel", () => {
    snackBarChannel.close();
    expect(mockChannel.close).toHaveBeenCalled();
  });
});
