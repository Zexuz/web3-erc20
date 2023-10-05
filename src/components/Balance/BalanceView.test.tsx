import React from "react";
import { render, screen } from "@testing-library/react";
import { BalanceView, ERC20Info } from "./BalanceView.tsx";
import { ethers } from "ethers";

jest.mock("ethers");

const mockEthers = ethers as jest.Mocked<typeof ethers>;

describe("BalanceView component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("displays loading state when info is null", () => {
    render(<BalanceView info={null} userAddress="some_user" />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays 'Connect Wallet to check balance' when user address is empty", () => {
    const info: ERC20Info = { balance: 100, symbol: "ETH", decimals: 18 };
    render(<BalanceView info={info} userAddress="" />);
    expect(
      screen.getByText("Connect Wallet to check balance"),
    ).toBeInTheDocument();
  });

  it("displays the Balance information correctly", () => {
    const info: ERC20Info = { balance: 100, symbol: "ETH", decimals: 18 };
    mockEthers.formatUnits.mockReturnValue("100.00");

    render(
      <BalanceView
        info={info}
        userAddress="0x1234567890123456789012345678901234567890"
      />,
    );

    expect(screen.getByText("You have 100.00 ETH")).toBeInTheDocument();
  });
});
