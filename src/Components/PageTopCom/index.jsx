import React, { useEffect, useState } from "react";
import classes from "./index.module.css";
import { toast } from "react-toastify";
import { Web3 } from "web3";
import { InfinitySpin } from "react-loader-spinner";

const userName = "Mrityunjay Vyas";

const PageTopCom = () => {
  const [walletBalance, setWalletBalance] = useState(-1);
  const [web3, setWeb3] = useState();

  const [isProcessDone, setIsProcessDone] = useState(false);

  const connectWallet = async () => {
    setIsProcessDone(false);

    /* Checking if MetaMask is installed on user browser*/

    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setWeb3(web3);

        await fetchBalance(web3, accounts[0]);

        toast.success("Wallet Connected Successfully!");
      } catch (err) {
        toast.error(`Connection failed : ${err.message}`);
        console.log(`#20249324724109 `, err.message);
      }
    } else {
      toast.error(
        "MetaMast Not Installed, please install it, before proceeding"
      );
    }

    setIsProcessDone(true);
  };

  const isWalletConnected = async () => {
    setIsProcessDone(false);

    /* Checking if MetaMask is installed on user browser*/

    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length > 0) {
          setWeb3(web3);

          await fetchBalance(web3, accounts[0]);
        }
      } catch (err) {
        console.log(`#20249324724102 `, err.message);
      }
    }
    setIsProcessDone(true);
  };

  const fetchBalance = async (web3, account) => {
    const walletBalanceWei = await web3.eth.getBalance(account);

    const walletBalanceEth =
      Math.round(Web3.utils.fromWei(walletBalanceWei, "ether") * 1000) / 1000;

    setWalletBalance(walletBalanceEth);
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

      {isProcessDone ? (
        walletBalance >= 0 ? (
          <span className={classes.connected}>Wallet: {walletBalance}Eth</span>
        ) : (
          <button
            className={`btn btn-primary ${classes.btn}`}
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )
      ) : (
        <InfinitySpin
          visible={true}
          width="100"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
      )}
    </div>
  );
};

export default PageTopCom;
