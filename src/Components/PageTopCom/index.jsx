import React, { useEffect, useState } from "react";

import classes from "./index.module.css";
import { toast } from "react-toastify";

const userName = "Mrityunjay Vyas";
const PageTopCom = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    /* Checking if MetaMask is installed on user browser*/

    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        toast.success("Wallet Connected Successfully!");

        setWalletAddress(accounts[0]);
        console.log(`#202493249438 `, accounts[0]);
      } catch (err) {
        toast.error(`Connection failed : ${err.message}`);
        console.error(err.message);
      }
    } else {
      toast.error(
        "MetaMast Not Installed, please install it, before proceeding"
      );
    }
  };

  const isWalletConnected = async () => {
    /* Checking if MetaMask is installed on user browser*/

    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  useEffect(() => {
    isWalletConnected();
  }, []);

  return (
    <div className={classes.mainContainer}>
      <div>
        <p className={classes.head}>
          Hello, <span>{userName}</span>
        </p>
        <p className={classes.subHead}>
          Welcome to <span>Spot trading !</span>
        </p>
      </div>
      {walletAddress.length > 0 ? (
        <span className={classes.connected}>Wallet Connected</span>
      ) : (
        <button
          className={`btn btn-primary ${classes.btn}`}
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default PageTopCom;
