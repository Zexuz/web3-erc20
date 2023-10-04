import React from "react";
import { render, act } from "@testing-library/react";
import { SnackbarContainer } from "./SnackbarContainer.tsx"; // Update the import to your actual file path
import { useSnackBarStore } from "../../store/snackbar"; // Update the import to your actual file path
import { BroadcastChannelFactory } from "../../lib/broadcastChannelFactory"; // Update the import to your actual file path

jest.mock("../../store/snackbar", () => ({
  useSnackBarStore: jest.fn(),
}));

jest.mock("./SnackbarView", () => ({
  SnackbarView: () => <div>SnackbarView</div>,
}));

BroadcastChannelFactory.getSnackbarChannel = jest.fn();

describe("SnackbarContainer", () => {
  let mockRemoveMessage: jest.Mock;
  let mockInitializeMessages: jest.Mock;
  let mockOnMessage: jest.Mock;
  let mockClose: jest.Mock;

  beforeEach(() => {
    mockRemoveMessage = jest.fn();
    mockInitializeMessages = jest.fn();
    mockOnMessage = jest.fn();
    mockClose = jest.fn();

    (useSnackBarStore as unknown as jest.Mock).mockImplementation(
      (selector) => {
        if (selector.toString().includes("removeMessage")) {
          return mockRemoveMessage;
        }
        return mockInitializeMessages;
      },
    );

    (BroadcastChannelFactory.getSnackbarChannel as jest.Mock).mockReturnValue({
      onMessage: mockOnMessage,
      close: mockClose,
    });
  });

  it("should call onMessage and close methods on component mount and unmount", () => {
    const { unmount } = render(<SnackbarContainer />);

    expect(BroadcastChannelFactory.getSnackbarChannel).toBeCalled();
    expect(mockOnMessage).toBeCalled();

    act(() => {
      unmount();
    });

    expect(mockClose).toBeCalled();
  });
});
