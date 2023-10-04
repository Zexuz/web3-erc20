import { Input } from "../Input";
import React from "react";
import { useTransferStore } from "../../store/transfer.ts";

export const ReceiverInput = () => {
  const receiverAddress = useTransferStore((state) => state.receiverAddress);
  const setReceiverAddress = useTransferStore(
    (state) => state.setReceiverAddress,
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Validate input
    setReceiverAddress(e.target.value);
  };

  return (
    <Input
      onChange={onChange}
      label={"Receiver address"}
      initialValue={receiverAddress}
      placeholder={"0xAbCeD"}
    />
  );
};
