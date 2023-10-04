import {
  getBalance,
  getDecimals,
  getSymbol,
} from "../../services/web3/erc20.ts";
import { useCallback, useEffect, useState } from "react";
import { BalanceView, ERC20Info } from "./BalanceView.tsx";

export interface BalanceTypes {
  contractAddress: string;
  userAddress: string;
}

export const BalanceContainer = ({
  contractAddress,
  userAddress,
}: BalanceTypes) => {
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

  return (
    <BalanceView
      info={info}
      contractAddress={contractAddress}
      userAddress={userAddress}
    />
  );
};
