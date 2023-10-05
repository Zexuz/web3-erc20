import { useUserStore } from "../../store/user.ts";
import { Title } from "../Title";
import { Separator } from "../Separator";
import React from "react";

export const SignedIn = () => {
  const address = useUserStore((state) => state.address);
  const trimmedAddress = address.slice(0, 6) + "..." + address.slice(-4);

  const text = address ? `Signed in as ${trimmedAddress}` : "Not connected";

  return (
    <>
      <Title text={text} />
      <Separator />
    </>
  );
};
