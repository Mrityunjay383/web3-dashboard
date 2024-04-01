import React from "react";

import classes from "./index.module.css";

const HomeIndieSec = ({ head, subHead, children }) => {
  return (
    <div className={classes.secCon}>
      <h5>{head}</h5>
      <div className={classes.childCon}>{children}</div>

      <p>{subHead}</p>
    </div>
  );
};

export default HomeIndieSec;
