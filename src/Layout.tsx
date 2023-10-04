import { Paragraph } from "./components/Paragraph";

export const Layout = ({ children }: { children: React.ReactNode }) => {
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

const baseClasses = "flex w-full items-center justify-center bg-blue-500 p-4";
const Header = () => {
  return (
    <header className={baseClasses}>
      <h1 className="text-lg font-medium text-gray-100">
        ERC-20 Token Transfers
      </h1>
    </header>
  );
};
const Footer = () => {
  return (
    <footer className={baseClasses}>
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
