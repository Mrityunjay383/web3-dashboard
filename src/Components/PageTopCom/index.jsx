import React from "react";

import classes from "./index.module.css";

const userName = "Mrityunjay Vyas";
const PageTopCom = () => {
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
      <button className={`btn btn-primary ${classes.btn}`}>
        Connect Wallet
      </button>
    </div>
  );
};

export default PageTopCom;
