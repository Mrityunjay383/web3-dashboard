import React from "react";
import PageTopCom from "../../Components/PageTopCom";
import LineChart from "../../Components/Charts/populationLineChart";

import classes from "./index.module.css";
import HomeIndieSec from "../../Components/HomeIndieSec";

const HomePage = () => {
  return (
    <div>
      <PageTopCom />
      <div className={classes.bodyCom}>
        <div className={classes.fRow}>
          <HomeIndieSec head={"United States"} subHead={"Get in depth Data"}>
            <LineChart />
          </HomeIndieSec>

          <HomeIndieSec head={"United States"} subHead={"Get in depth Data"}>
            data
          </HomeIndieSec>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
