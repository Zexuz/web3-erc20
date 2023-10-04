import React, { ChangeEvent } from "react";

import { Input } from "../Input";
import { useTransferStore } from "../../store/transfer.ts";

export const ERC20AddressInput = () => {
  const setContractAddress = useTransferStore(
    (state) => state.setContractAddress,
  );
  const contractAddress = useTransferStore((state) => state.contractAddress);

  const onContractAddressChange = async (e: ChangeEvent<HTMLInputElement>) => {
    // TODO: Validate address
    setContractAddress(e.target.value);
  };

  return (
    <Input
      onChange={onContractAddressChange}
      label={"Contract address"}
      initialValue={contractAddress}
      placeholder={"0xAbCeD"}
    />
  );
};
