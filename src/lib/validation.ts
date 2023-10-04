type ValidationResult = {
  isValid: boolean;
  reason: string;
};

export const validateEthereumAddress = (address: string): ValidationResult => {
  if (!address.startsWith("0x")) {
    return { isValid: false, reason: "Address should start with '0x'." };
  }

  if (address.length !== 42) {
    console.log(address.length);
    return {
      isValid: false,
      reason:
        "Address should be exactly 42 characters long, including the '0x' prefix.",
    };
  }

  const regex = /^[a-fA-F0-9]{40}$/;
  if (!regex.test(address.substring(2))) {
    return {
      isValid: false,
      reason: "Address should contain only hexadecimal characters.",
    };
  }

  return { isValid: true, reason: "Valid address." };
};
