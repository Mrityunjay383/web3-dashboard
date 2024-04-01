import React, { useState } from "react";

import classes from "./index.module.css";
import HomeCommonCard from "../../Components/HomeComponents/HomeCommonCard";

const CommonPage = ({ pageTitle }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  return (
    <div className={classes.mainCom}>
      <h2>{pageTitle} Pages</h2>
      <div className={classes.Row}>
        {Array.from(Array(15).keys()).map((e, i) => {
          return (
            <HomeCommonCard
              key={i}
              width={isMobile ? "47%" : "22%"}
              height={"15vh"}
            >
              <div className={classes.placeholderCom}>Resource {i + 1}</div>
            </HomeCommonCard>
          );
        })}
      </div>
    </div>
  );
};

export default CommonPage;
