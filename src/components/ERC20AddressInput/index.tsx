import React, { ChangeEvent } from "react";

import { Input } from "../Input";
import { useTransferStore } from "../../store/transfer.ts";
import { validateEthereumAddress } from "../../lib/validation.ts";

export const ERC20AddressInput = () => {
  const setContractAddress = useTransferStore(
    (state) => state.setContractAddress,
  );
  const contractAddress = useTransferStore((state) => state.contractAddress);
  const [isValueValid, setIsValueValid] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");

  const onContractAddressChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const validationResponse = validateEthereumAddress(e.target.value);

    if (!validationResponse.isValid) {
      setIsValueValid(validationResponse.isValid);
      setErrorMessage(validationResponse.reason);
      return;
    } else {
      setIsValueValid(true);
      setErrorMessage("");
    }

    setContractAddress(e.target.value);
  };

  return (
    <Input
      onChange={onContractAddressChange}
      label={"Contract address"}
      initialValue={contractAddress}
      placeholder={"0xAbCeD"}
      errorMessage={errorMessage}
      isValueValid={isValueValid}
    />
  );
};
