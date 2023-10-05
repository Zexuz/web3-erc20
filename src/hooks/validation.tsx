import { useState, ChangeEvent } from "react";

export interface ValidationResult {
  isValid: boolean;
  reason: string;
}

interface UseValidatedInputProps {
  initialValue: string | number;
  validate: (value: string) => ValidationResult;
  setValue: (value: string) => void;
}

export const useValidatedInput = ({
  initialValue,
  validate,
  setValue,
}: UseValidatedInputProps) => {
  const [isValueValid, setIsValueValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const validationResponse = validate(value);

    if (!validationResponse.isValid) {
      setIsValueValid(false);
      setErrorMessage(validationResponse.reason);
      return;
    } else {
      setIsValueValid(true);
      setErrorMessage("");
    }

    setValue(value);
  };

  return {
    isValueValid,
    errorMessage,
    onChange,
    initialValue,
  };
};
