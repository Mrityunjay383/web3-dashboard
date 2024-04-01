import React from "react";

import HomeFirstRow from "../../Components/HomeComponents/HomeFirstRow";
import HomeSecRow from "../../Components/HomeComponents/HomeSecRow";

import classes from "./index.module.css";
import HomeThirdRow from "../../Components/HomeComponents/HomeThirdRow";

const HomePage = () => {
  return (
    <div className={classes.bodyCom}>
      <HomeFirstRow />
      <HomeSecRow />
      <HomeThirdRow />
    </div>
  );
};

export default HomePage;
