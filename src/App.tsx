import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Paragraph } from "./components/Paragraph";
import { Balance } from "./components/Balance";

const CCIP_TOKEN_ADDRESS = "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05";

function App() {
  const userAddress = "0xddc2f17daCb8187AC0e26e6Bd852Ee3212684b81";
  const onContractAddressChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {};

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center space-y-8 py-2">
        <div>
          <Input
            onChange={onContractAddressChange}
            label={"Contract address"}
            placeholder={"0xAbCeD"}
          />
          <Balance
            contractAddress={CCIP_TOKEN_ADDRESS}
            userAddress={userAddress}
          />
        </div>
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

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-blue-600">
        <Header />
        <div className="flex-grow" />
        <main>{children}</main>
        <div className="flex-grow" />
        <Footer />
      </div>
    </>
  );
};

const Header = () => {
  return (
    <header className="flex w-full items-center justify-center bg-blue-500 p-4">
      <h1 className="text-lg font-medium text-gray-100">
        ERC-20 Token Transfers
      </h1>
    </header>
  );
};
const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center bg-blue-500 p-4">
      <Paragraph text={"Made with love ❤️ "} />
      <a
        href="https://github.com/zexuz/"
        className="pl-1 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        @Zexuz
      </a>
    </footer>
  );
};

export default App;
