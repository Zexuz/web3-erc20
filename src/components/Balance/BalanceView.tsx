import { Paragraph } from "../Paragraph";
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
  if (!userAddress) {
    return <Paragraph text="Sign in to check balance" />;
  }

  if (!info) {
    return <Paragraph text="Loading..." />;
  }

  if (contractAddress.length !== 42) {
    return <Paragraph text="Invalid contract address" />;
  }

  const formattedBalance = ethers.formatUnits(info.balance, info.decimals);

  return <Paragraph text={`You have ${formattedBalance} ${info.symbol}`} />;
};
