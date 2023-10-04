import { Input } from "./components/input";
import { Button } from "./components/button";
import { Paragraph } from "./components/paragraph";

function App() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-2">
        <Input
          onChange={(e) => console.log(e.target.value)}
          label={"Contract address"}
          placeholder={"0xAbCeD"}
        />
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
