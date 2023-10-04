import { Input } from "../Input";
import { Balance } from "../Balance";

const CCIP_TOKEN_ADDRESS = "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05";

export const ERC20AddressInput = () => {
  const userAddress = "0xddc2f17daCb8187AC0e26e6Bd852Ee3212684b81";
  const onContractAddressChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {};

  return (
    <div>
      <Input
        onChange={onContractAddressChange}
        label={"Contract address"}
        placeholder={"0xAbCeD"}
      />
      <Balance contractAddress={CCIP_TOKEN_ADDRESS} userAddress={userAddress} />
    </div>
  );
};
