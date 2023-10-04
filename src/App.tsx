import { ERC20AddressInput } from "./components/ERC20AddressInput";
import { Layout } from "./Layout.tsx";
import { Snackbars } from "./components/Snackbar";
import { TransferButton } from "./components/TransferButton";
import React from "react";
import { AmountInput } from "./components/AmountInput";
import { ReceiverInput } from "./components/ReceiverInput";

function App() {
  return (
    <Layout>
      <Snackbars />
      <div className="mx-auto flex w-1/3 flex-col items-center space-y-8 py-2 ">
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
