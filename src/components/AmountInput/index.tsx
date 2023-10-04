import { Input } from "../Input";
import { Balance } from "../Balance";
import React from "react";
import { useTransferStore } from "../../store/transfer.ts";

export const AmountInput = () => {
  const amount = useTransferStore((state) => state.amount);
  const setAmount = useTransferStore((state) => state.setAmount);
  const [isValueValid, setIsValueValid] = React.useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = Number(e.target.value);
    if (isNaN(number)) {
      setIsValueValid(false);
      return;
    }

    setIsValueValid(true);
    setAmount(number);
  };

  return (
    <div className="w-full">
      <Input
        onChange={onChange}
        label={"Amount"}
        initialValue={amount === 0 ? "" : amount}
        placeholder={"777.7777777"}
        disabled={false}
        isValueValid={isValueValid}
        errorMessage={"Not a valid number"}
      />
      <Balance />
    </div>
  );
};
