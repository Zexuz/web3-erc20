import { Input } from "../Input";
import { Balance } from "../Balance";
import React from "react";
import { useTransferStore } from "../../store/transfer.ts";
import { validateAmount } from "../../lib/validation.ts";
import { useValidatedInput } from "../../hooks/validation.tsx";

export const AmountInput = () => {
  const amount = useTransferStore((state) => state.amount);
  const setAmount = useTransferStore((state) => state.setAmount);

  const { isValueValid, errorMessage, onChange, initialValue } =
    useValidatedInput({
      initialValue: amount === 0 ? "" : amount,
      validate: validateAmount,
      setValue: (value: string) => setAmount(Number(value)),
    });

  return (
    <div className="w-full">
      <Input
        onChange={onChange}
        label={"Amount"}
        initialValue={initialValue}
        placeholder={"777.7777777"}
        disabled={false}
        isValueValid={isValueValid}
        errorMessage={errorMessage}
      />
      <Balance />
    </div>
  );
};
