import { ERC20AddressInput } from "./components/ERC20AddressInput";
import { Layout } from "./Layout.tsx";
import { Snackbars } from "./components/Snackbar";
import { TransferButton } from "./components/TransferButton";
import React from "react";
import { AmountInput } from "./components/AmountInput";
import { ReceiverInput } from "./components/ReceiverInput";
import { useUserStore } from "./store/user.ts";
import { SignedIn } from "./components/SignedIn";

function App() {
  const setAddress = useUserStore((state) => state.setAddress);

  window.ethereum.on("accountsChanged", function (accounts: string[]) {
    setAddress(accounts[0]);
  });

  return (
    <Layout>
      <Snackbars />
      <div className="mx-auto flex w-1/3 flex-col items-center space-y-8 py-2 ">
        <SignedIn />
        <ERC20AddressInput />
        <ReceiverInput />
        <AmountInput />
        <TransferButton />
      </div>
      <div className="flex-grow" />
      {/* Spacer */}
    </Layout>
  );
}

export default App;
