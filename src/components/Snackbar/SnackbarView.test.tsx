import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SnackbarView, SnackbarMessage } from "./SnackbarView";

describe("SnackbarView", () => {
  let mockRemoveMessage: jest.Mock;
  let mockMessages: SnackbarMessage[];

  beforeEach(() => {
    mockRemoveMessage = jest.fn();

    mockMessages = [
      {
        id: "1",
        type: "info",
        message: "Info message",
        duration: 5000,
      },
      {
        id: "2",
        type: "success",
        message: "Success message",
        duration: 5000,
      },
      {
        id: "3",
        type: "error",
        message: "Error message",
        duration: 10000,
      },
    ];
  });

  it("should render all messages", () => {
    render(
      <SnackbarView
        messages={mockMessages}
        removeMessage={mockRemoveMessage}
      />,
    );
    expect(screen.getByText("Info message")).toBeInTheDocument();
    expect(screen.getByText("Success message")).toBeInTheDocument();
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("should call removeMessage when CloseButton is clicked", () => {
    render(
      <SnackbarView
        messages={mockMessages}
        removeMessage={mockRemoveMessage}
      />,
    );

    const closeButton = screen.getAllByLabelText("Close")[0];
    fireEvent.click(closeButton);

    expect(mockRemoveMessage).toHaveBeenCalledWith("1");
  });
});
