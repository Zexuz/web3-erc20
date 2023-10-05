import { ethers } from "ethers";
import { useUserStore } from "../../store/user.ts";
import { Button } from "../Button";
import { useSnackBarStore } from "../../store/snackbar.ts";
import { useState } from "react";
import { useTransferStore } from "../../store/transfer.ts";

export const TransferButton = () => {
  const setAddress = useUserStore((state) => state.setAddress);
  const address = useUserStore((state) => state.address);
  const addMessage = useSnackBarStore((state) => state.addMessage);

  const transfer = useTransferStore((state) => state.transfer);
  const isValid = useTransferStore((state) => state.isValid);

  const [isSending, setIsSending] = useState(false);

  const onTransfer = async () => {
    if (!address) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAddress(address);
      return;
    }

    try {
      setIsSending(true);
      await transfer(() => addMessage("info", "Sending transaction..."));
      addMessage("success", "Transaction confirmed");
    } catch (e) {
      addMessage("error", "Failed to send transaction");
      console.error(e);
    } finally {
      setIsSending(false);
    }
  };

  const text = address ? "Transfer" : "Connect Wallet";
  return (
    <div className="flex min-w-full justify-center">
      <Button
        text={text}
        disabled={!address ? false : !isValid}
        isLoading={isSending}
        onClick={onTransfer}
      />
    </div>
  );
};
