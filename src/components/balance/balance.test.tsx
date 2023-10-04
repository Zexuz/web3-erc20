import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { Balance } from "./balance.tsx";
import * as erc20Service from "../../services/web3/erc20";
import { ethers } from "ethers";

jest.mock("ethers");
jest.mock("../../services/web3/erc20");

const mockErc20Service = erc20Service as jest.Mocked<typeof erc20Service>;

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Balance component", () => {
  it("displays loading state", async () => {
    render(<Balance contractAddress="some_contract" userAddress="some_user" />);

    await waitFor(() => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });

  it("fetches and displays balance", async () => {
    ethers.formatUnits = jest.fn().mockReturnValue("100.00");

    mockErc20Service.getBalance.mockResolvedValue(100);
    mockErc20Service.getSymbol.mockResolvedValue("ETH");
    mockErc20Service.getDecimals.mockResolvedValue(18);

    render(<Balance contractAddress="some_contract" userAddress="some_user" />);

    await waitFor(() => {
      expect(screen.getByText("You have 100.00 ETH")).toBeInTheDocument();
    });

    expect(erc20Service.getBalance).toHaveBeenCalledWith(
      "some_contract",
      "some_user",
    );
    expect(erc20Service.getSymbol).toHaveBeenCalledWith("some_contract");
    expect(erc20Service.getDecimals).toHaveBeenCalledWith("some_contract");
    expect(ethers.formatUnits).toHaveBeenCalledWith(100, 18);
  });
});
