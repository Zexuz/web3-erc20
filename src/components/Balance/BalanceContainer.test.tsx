import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BalanceContainer } from "./BalanceContainer";
import * as erc20Service from "../../services/web3/erc20";
import { act } from "react-dom/test-utils";

jest.mock("../../services/web3/erc20");

const mockErc20Service = erc20Service as jest.Mocked<typeof erc20Service>;

describe("BalanceContainer component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("fetches balance, symbol, and decimals on mount", async () => {
    mockErc20Service.getBalance.mockResolvedValue(100);
    mockErc20Service.getSymbol.mockResolvedValue("ETH");
    mockErc20Service.getDecimals.mockResolvedValue(18);

    act(() => {
      render(
        <BalanceContainer
          contractAddress="some_contract"
          userAddress="some_user"
        />,
      );
    });

    await waitFor(() => {
      expect(mockErc20Service.getBalance).toHaveBeenCalledWith(
        "some_contract",
        "some_user",
      );
      expect(mockErc20Service.getSymbol).toHaveBeenCalledWith("some_contract");
      expect(mockErc20Service.getDecimals).toHaveBeenCalledWith(
        "some_contract",
      );
    });
  });

  it("passes fetched data to BalanceView", async () => {
    mockErc20Service.getBalance.mockResolvedValue(100000000000);
    mockErc20Service.getSymbol.mockResolvedValue("ETH");
    mockErc20Service.getDecimals.mockResolvedValue(18);

    act(() => {
      render(
        <BalanceContainer
          contractAddress="0xddc2f17daCb8187AC0e26e6Bd852Ee3212684b81"
          userAddress="0xddc2f17daCb8187AC0e26e6Bd852Ee3212684b81"
        />,
      );
    });

    await waitFor(() => {
      expect(screen.getByText("You have 0.0000001 ETH")).toBeInTheDocument();
    });
  });
});
