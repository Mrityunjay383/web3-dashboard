import React, { useEffect, useState } from "react";
import { GoHome, GoOrganization } from "react-icons/go";
import { GrCube } from "react-icons/gr";
import { FaArrowDownUpAcrossLine } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { PiWalletLight } from "react-icons/pi";

import classes from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";

import { navLinks } from "../../data";

const SbNavLinks = () => {
  const navigate = useNavigate();

  const [pathName, setPathName] = useState(window.location.pathname);

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [navigate]);

  return (
    <div className={classes.navCon}>
      {navLinks.map((link, i) => {
        return (
          <Link
            key={i}
            className={`${classes.navElements} ${
              pathName === link.goto && classes.active
            }`}
            to={link.goto}
          >
            {link.icon}
            <span>{link.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SbNavLinks;
