import React, { useState } from "react";
import classes from "./index.module.css";
import HomeCommonCard from "../HomeCommonCard";

const HomeSecRow = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  return (
    <>
      <h3>Assets</h3>
      <div className={classes.Row}>
        {Array.from(Array(5).keys()).map((e, i) => {
          return (
            <HomeCommonCard
              key={i}
              width={isMobile ? "47%" : "17%"}
              height={"15vh"}
            >
              <div className={classes.placeholderCom}>Asset {i + 1}</div>
            </HomeCommonCard>
          );
        })}
      </div>
    </>
  );
};

export default HomeSecRow;
