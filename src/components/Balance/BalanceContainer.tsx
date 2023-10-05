import {
  getBalance,
  getDecimals,
  getSymbol,
} from "../../services/web3/erc20.ts";
import { useCallback, useEffect, useState } from "react";
import { BalanceView, ERC20Info } from "./BalanceView.tsx";
import { useTransferStore } from "../../store/transfer.ts";
import { useUserStore } from "../../store/user.ts";

export const BalanceContainer = () => {
  const contractAddress = useTransferStore((state) => state.contractAddress);
  const nrOfTransfers = useTransferStore((state) => state.nrOrTransfers);
  const userAddress = useUserStore((state) => state.address);

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
  }, [contractAddress, userAddress, nrOfTransfers]);

  useEffect(() => {
    fetchBalance();
  }, [contractAddress, fetchBalance, userAddress, nrOfTransfers]);

  console.log(nrOfTransfers);

  return (
    <BalanceView
      info={info}
      contractAddress={contractAddress}
      userAddress={userAddress}
    />
  );
};
