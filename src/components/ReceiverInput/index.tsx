import { Input } from "../Input";
import { useTransferStore } from "../../store/transfer.ts";
import { validateEthereumAddress } from "../../lib/validation.ts";
import { useValidatedInput } from "../../hooks/validation.tsx";

export const ReceiverInput = () => {
  const receiverAddress = useTransferStore((state) => state.receiverAddress);
  const setReceiverAddress = useTransferStore(
    (state) => state.setReceiverAddress,
  );

  const { isValueValid, errorMessage, onChange, initialValue } =
    useValidatedInput({
      initialValue: receiverAddress,
      validate: validateEthereumAddress,
      setValue: setReceiverAddress,
    });

  return (
    <Input
      onChange={onChange}
      label={"Receiver address"}
      initialValue={initialValue}
      placeholder={"0xAbCeD"}
      isValueValid={isValueValid}
      errorMessage={errorMessage}
    />
  );
};
