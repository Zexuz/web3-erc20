import { Input } from "../Input";
import { useTransferStore } from "../../store/transfer.ts";
import { validateEthereumAddress } from "../../lib/validation.ts";
import { useValidatedInput } from "../../hooks/useValidatedInput";

export const ERC20AddressInput = () => {
  const setContractAddress = useTransferStore(
    (state) => state.setContractAddress,
  );
  const contractAddress = useTransferStore((state) => state.contractAddress);
  const { isValueValid, errorMessage, onChange, initialValue } =
    useValidatedInput({
      initialValue: contractAddress,
      validate: validateEthereumAddress,
      setValue: setContractAddress,
    });

  return (
    <Input
      onChange={onChange}
      label={"Contract address"}
      initialValue={initialValue}
      placeholder={"0xAbCeD"}
      errorMessage={errorMessage}
      isValueValid={isValueValid}
    />
  );
};
