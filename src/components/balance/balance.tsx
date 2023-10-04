import { Paragraph } from "../paragraph";
import {
  getBalance,
  getDecimals,
  getSymbol,
} from "../../services/web3/erc20.ts";
import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";

interface BalanceProps {
  contractAddress: string;
  userAddress: string;
}

interface ERC20Info {
  balance: number;
  symbol: string;
  decimals: number;
}

export const Balance = ({ contractAddress, userAddress }: BalanceProps) => {
  const [info, setInfo] = useState<ERC20Info | null>(null);

  const fetchBalance = useCallback(async () => {
    const balance = await getBalance(contractAddress, userAddress);
    const symbol = await getSymbol(contractAddress);
    const decimals = await getDecimals(contractAddress);

    setInfo({
      balance,
      symbol,
      decimals,
    });
  }, [contractAddress, userAddress]);

  useEffect(() => {
    fetchBalance();
  }, [contractAddress, fetchBalance, userAddress]);

  if (!info) {
    return <Paragraph text={"Loading..."} />;
  }

  const formattedBalance = ethers.formatUnits(info.balance, info.decimals);
  return <Paragraph text={`You have ${formattedBalance} ${info.symbol}`} />;
};
