import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BalanceContainer } from "./BalanceContainer";
import * as erc20Service from "../../services/web3/erc20";
import { act } from "react-dom/test-utils";
import { useUserStore } from "../../store/user.ts";
import { useTransferStore } from "../../store/transfer.ts";

jest.mock("../../services/web3/erc20");

const mockErc20Service = erc20Service as jest.Mocked<typeof erc20Service>;

jest.mock("../../store/user.ts", () => ({
  useUserStore: jest.fn(),
}));

jest.mock("../../store/transfer.ts", () => ({
  useTransferStore: jest.fn(),
}));

describe("BalanceContainer component", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useUserStore as unknown as jest.Mock).mockImplementation(
      () => "0xddc2f17daCb8187AC0e26e6Bd852Ee3212684b8A",
    );

    (useTransferStore as unknown as jest.Mock).mockImplementation(
      () => "0xddc2f17daCb8187AC0e26e6Bd852Ee3212684b8B",
    );
  });

  it("fetches balance, symbol, and decimals on mount", async () => {
    mockErc20Service.getBalance.mockResolvedValue(100);
    mockErc20Service.getSymbol.mockResolvedValue("ETH");
    mockErc20Service.getDecimals.mockResolvedValue(18);

    act(() => {
      render(<BalanceContainer />);
    });

    await waitFor(() => {
      expect(mockErc20Service.getBalance).toHaveBeenCalledWith(
        "0xddc2f17daCb8187AC0e26e6Bd852Ee3212684b8B",
        "0xddc2f17daCb8187AC0e26e6Bd852Ee3212684b8A",
      );
      expect(mockErc20Service.getSymbol).toHaveBeenCalledWith(
        "0xddc2f17daCb8187AC0e26e6Bd852Ee3212684b8B",
      );
      expect(mockErc20Service.getDecimals).toHaveBeenCalledWith(
        "0xddc2f17daCb8187AC0e26e6Bd852Ee3212684b8B",
      );
    });
  });

  it("passes fetched data to BalanceView", async () => {
    mockErc20Service.getBalance.mockResolvedValue(100000000000);
    mockErc20Service.getSymbol.mockResolvedValue("ETH");
    mockErc20Service.getDecimals.mockResolvedValue(18);

    act(() => {
      render(<BalanceContainer />);
    });

    await waitFor(() => {
      expect(screen.getByText("You have 0.0000001 ETH")).toBeInTheDocument();
    });
  });
});
