import React from "react";

import classes from "./index.module.css";

const HomeIndieCard = ({ head, bottom, width, children }) => {
  return (
    <div className={classes.secCon} style={{ width }}>
      <h5>{head}</h5>
      <div className={classes.childCon}>{children}</div>

      <p>{bottom}</p>
    </div>
  );
};

export default HomeIndieCard;
