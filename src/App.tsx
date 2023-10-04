import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { ERC20AddressInput } from "./components/ERC20AddressInput";
import { Layout } from "./Layout.tsx";

function App() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center space-y-8 py-2">
        <ERC20AddressInput />
        <Input
          onChange={(e) => console.log(e.target.value)}
          label={"Receiver address"}
          placeholder={"0xAbCeD"}
        />
        <Input
          onChange={(e) => console.log(e.target.value)}
          label={"Amount"}
          placeholder={"777.7777777"}
        />
        <Button text={"Transfer"} onClick={() => console.log("Transfer")} />
      </div>
      <div className="flex-grow" />
      {/* Spacer */}
    </Layout>
  );
}

export default App;
