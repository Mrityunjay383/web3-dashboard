import React from "react";
import classes from "./index.module.css";

const HomeCommonCard = ({ width, height, children }) => {
  return (
    <div style={{ width, height }} className={classes.secCon}>
      {children}
    </div>
  );
};

export default HomeCommonCard;
