import { Input } from "../Input";
import React, { ChangeEvent } from "react";
import { useTransferStore } from "../../store/transfer.ts";
import { validateEthereumAddress } from "../../lib/validation.ts";

export const ReceiverInput = () => {
  const receiverAddress = useTransferStore((state) => state.receiverAddress);
  const setReceiverAddress = useTransferStore(
    (state) => state.setReceiverAddress,
  );
  const [isValueValid, setIsValueValid] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const validationResponse = validateEthereumAddress(e.target.value);

    if (!validationResponse.isValid) {
      setIsValueValid(validationResponse.isValid);
      setErrorMessage(validationResponse.reason);
      return;
    } else {
      setIsValueValid(true);
      setErrorMessage("");
    }

    setReceiverAddress(e.target.value);
  };

  return (
    <Input
      onChange={onChange}
      label={"Receiver address"}
      initialValue={receiverAddress}
      placeholder={"0xAbCeD"}
      isValueValid={isValueValid}
      errorMessage={errorMessage}
    />
  );
};
