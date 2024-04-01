import React from "react";
import parse from "html-react-parser";
import classes from "./index.module.css";

const CryptoPriceCom = ({ priceData }) => {
  return (
    <div className={classes.mainCom}>
      {Object.keys(priceData).map((code, i) => {
        return (
          <span key={i}>
            {code} :{" "}
            <i>
              {parse(priceData[code].symbol)} {priceData[code].rate}
            </i>
          </span>
        );
      })}
    </div>
  );
};

export default CryptoPriceCom;
