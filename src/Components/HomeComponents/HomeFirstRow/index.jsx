import React, { useEffect, useState } from "react";
import HomeIndieCard from "../HomeIndieCard";
import LineChart from "../Charts/populationLineChart";
import CryptoPriceCom from "../CryptoPriceCom";
import Loader from "../../Loader";

import classes from "./index.module.css";

import { getCryptoPrices } from "../../../service";
import { toast } from "react-toastify";

const HomeFirstRow = () => {
  const [cryptoData, setCryptoData] = useState({});

  const [isDataLoaded, setDataLoaded] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  const fetchCryptoData = async () => {
    try {
      const res = await getCryptoPrices();

      if (res.status === 200) {
        const data = res.data;
        setCryptoData(data);
        setDataLoaded(true);
      } else {
        toast.error("Fetching Crypto data failed!");
      }
    } catch (err) {
      console.log(`#2024925502141 err`, err);
      toast.error("Something went wrong!!");
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  return (
    <div className={classes.Row}>
      <HomeIndieCard
        head={"United States"}
        bottom={"Get in depth Data"}
        width={isMobile ? "100%" : "45%"}
      >
        <LineChart />
      </HomeIndieCard>

      <HomeIndieCard
        head={`Live ${cryptoData.chartName} Prices`}
        bottom={
          <button className={`btn btn-primary ${classes.btn}`}>
            Got More Data
          </button>
        }
        width={isMobile ? "100%" : "25%"}
      >
        {isDataLoaded ? (
          <CryptoPriceCom priceData={cryptoData.bpi} />
        ) : (
          <Loader />
        )}
      </HomeIndieCard>

      <HomeIndieCard
        head={`In Recent posts`}
        bottom={
          <button className={`btn btn-primary ${classes.btn}`}>
            Follow us on X
          </button>
        }
        width={isMobile ? "100%" : "25%"}
      >
        <div className={classes.post}>Recent Post</div>
      </HomeIndieCard>
    </div>
  );
};

export default HomeFirstRow;
