type ValidationResult = {
  isValid: boolean;
  reason: string;
};

export const validateEthereumAddress = (address: string): ValidationResult => {
  if (!address.startsWith("0x")) {
    return { isValid: false, reason: "Address should start with '0x'." };
  }

  if (address.length < 42) {
    return { isValid: false, reason: "Address too short." };
  }

  if (address.length > 42) {
    return { isValid: false, reason: "Address too long." };
  }

  const regex = /^[a-fA-F0-9]{40}$/;
  if (!regex.test(address.substring(2))) {
    return {
      isValid: false,
      reason: "Address should contain only hexadecimal characters.",
    };
  }

  return { isValid: true, reason: "" };
};

export const validateAmount = (amount: string): ValidationResult => {
  const number = Number(amount);
  if (isNaN(number)) {
    return { isValid: false, reason: "Amount is not .eslintrc.js number." };
  }

  if (number <= 0) {
    return { isValid: false, reason: "Amount should be greater than 0." };
  }

  return { isValid: true, reason: "" };
};
