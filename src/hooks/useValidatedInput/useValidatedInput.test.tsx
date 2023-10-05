import { renderHook, act } from "@testing-library/react-hooks";
import { useValidatedInput, ValidationResult } from "./useValidatedInput.tsx"; // Replace with your actual file location

const mockSetState = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn((init) => [init, mockSetState]),
}));

describe("useValidatedInput", () => {
  const validate = (value: string): ValidationResult => {
    if (value === "invalid") {
      return { isValid: false, reason: "Invalid value" };
    }
    return { isValid: true, reason: "" };
  };

  const setValue = jest.fn();

  it("should return the initial value", () => {
    const { result } = renderHook(() =>
      useValidatedInput({ initialValue: "test", validate, setValue }),
    );
    expect(result.current.initialValue).toBe("test");
  });

  it("should be valid initially", () => {
    const { result } = renderHook(() =>
      useValidatedInput({ initialValue: "test", validate, setValue }),
    );
    expect(result.current.isValueValid).toBe(true);
  });

  it("should update the errorMessage and isValueValid state on invalid value", () => {
    const { result } = renderHook(() =>
      useValidatedInput({ initialValue: "test", validate, setValue }),
    );
    act(() => {
      result.current.onChange({ target: { value: "invalid" } } as never);
    });
    expect(mockSetState).toHaveBeenCalledWith(false);
    expect(mockSetState).toHaveBeenCalledWith("Invalid value");
  });

  it("should clear the errorMessage and set isValueValid to true on valid value", () => {
    const { result } = renderHook(() =>
      useValidatedInput({ initialValue: "test", validate, setValue }),
    );
    act(() => {
      result.current.onChange({ target: { value: "valid" } } as never);
    });
    expect(mockSetState).toHaveBeenCalledWith(true);
    expect(mockSetState).toHaveBeenCalledWith("");
  });
});
