import React, { useState } from "react";
import classes from "./index.module.css";
import HomeCommonCard from "../HomeCommonCard";

const HomeThirdRow = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  return (
    <>
      <h3>News & Blogs</h3>
      <div className={classes.Row}>
        {Array.from(Array(6).keys()).map((e, i) => {
          return (
            <HomeCommonCard
              key={i}
              width={isMobile ? "100%" : "30%"}
              height={"25vh"}
            >
              <div className={classes.placeholderCom}>News {i + 1}</div>
            </HomeCommonCard>
          );
        })}
      </div>
    </>
  );
};

export default HomeThirdRow;
