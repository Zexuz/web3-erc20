import { Paragraph } from "../Paragraph";
import { ethers } from "ethers";

interface BalanceViewProps {
  info: ERC20Info | null;
  userAddress: string;
}

export interface ERC20Info {
  balance: number;
  symbol: string;
  decimals: number;
}

export const BalanceView = ({ info, userAddress }: BalanceViewProps) => {
  if (!userAddress) {
    return <Paragraph text="Connect Wallet to check balance" />;
  }

  if (!info) {
    return <Paragraph text="Loading..." />;
  }

  const formattedBalance = ethers.formatUnits(info.balance, info.decimals);

  return <Paragraph text={`You have ${formattedBalance} ${info.symbol}`} />;
};
