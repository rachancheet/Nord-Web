import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useRouter } from "next/router";
export default function Login() {
  const { account, connectWallet, error } = useContext(AppContext);
  const router = useRouter();
  useEffect(() => {
    if (account) {
      router.push("/");
    }
  }, [account]);
  return (
    <div className="flex flex-col bg-black text-white items-center justify-center min-h-screen min-w-full">
      {/* <button
          onClick={connectWallet}
          className=" h-10 w-10 rounded-full ring-2"
        >
          Login
        </button> */}

      <button
        onClick={connectWallet}
        className="flex flex-col justify-center text-3xl"
        type="button"
        class=""
      >
        <img className="mb-10" src="/metamask.gif"></img>
        Connect with MetaMask
      </button>
    </div>
  );
}
