import { validateEthereumAddress } from "./validation.ts";

describe("Validation", () => {
  describe("validateEthereumAddress", () => {
    test.each([
      ["AAA", false, "Address should start with '0x'."],
      ["00", false, "Address should start with '0x'."],
      ["xx", false, "Address should start with '0x'."],
      ["0xABC", false, "Address too short."],
      ["0x" + "A".repeat(42), false, "Address too long."],
      [
        "0x742d35Cc6634C0532925a3b844Bc454e4438f44G",
        false,
        "Address should contain only hexadecimal characters.",
      ],
      ["0x742d35Cc6634C0532925a3b844Bc454e4438f44e", true, undefined],
    ])(
      "when input is %s, it should return {isValid: %p, reason: %p}",
      (input, expectedIsValid, expectedReason) => {
        const result = validateEthereumAddress(input);
        expect(result.reason).toBe(expectedReason);
        expect(result.isValid).toBe(expectedIsValid);
      },
    );
  });
});
