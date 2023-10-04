import { Paragraph } from "../paragraph";
import { ethers } from "ethers";

interface BalanceViewProps {
  info: ERC20Info | null;
  contractAddress: string;
  userAddress: string;
}

export interface ERC20Info {
  balance: number;
  symbol: string;
  decimals: number;
}

export const BalanceView = ({
  info,
  contractAddress,
  userAddress,
}: BalanceViewProps) => {
  if (!info) {
    return <Paragraph text="Loading..." />;
  }

  if (contractAddress.length !== 42) {
    return <Paragraph text="Invalid contract address" />;
  }

  if (!userAddress) {
    return <Paragraph text="Invalid user address" />;
  }

  const formattedBalance = ethers.formatUnits(info.balance, info.decimals);

  return <Paragraph text={`You have ${formattedBalance} ${info.symbol}`} />;
};