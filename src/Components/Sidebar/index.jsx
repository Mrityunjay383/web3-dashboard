import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";

import classes from "./index.module.css";
import SbNavLinks from "../SbNavLinks";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsBell } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";

const Sidebar = () => {
  const navigate = useNavigate();

  const [isSbOpen, setIsSbOpen] = useState(window.innerWidth > 500);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    if (isMobile) {
      setIsSbOpen(false);
    }
  }, [navigate]);

  return (
    <div
      className={classes.mainContainer}
      style={isSbOpen && isMobile ? { position: "absolute", zIndex: 10 } : {}}
    >
      {isSbOpen ? (
        <>
          <div className={classes.top}>
            <Link className={classes.logo} to={"/"}>
              Logo
            </Link>
            <GiHamburgerMenu
              className={classes.hamburgerIcon}
              onClick={() =>
                setIsSbOpen((curr) => {
                  return !curr;
                })
              }
            />
          </div>

          <div className={classes.searchCon}>
            <IoSearch />
            <input type="text" placeholder={"Search..."} />
          </div>

          <SbNavLinks />

          <div className={classes.impLinks}>
            <div className={classes.impLink}>
              <div>
                <BsBell />
                <span>Notification</span>
              </div>
              <span className={classes.notiCount}>12</span>
            </div>
            <div className={classes.impLink}>
              <FaRegQuestionCircle />
              <span>Support</span>
            </div>
            <div className={classes.impLink}>
              <MdOutlineSettings />
              <span>Settings</span>
            </div>
          </div>

          <div className={classes.userBox}>
            <img
              className={classes.userImg}
              src={require("../../Assets/user-profile-placeholder-image.jpg")}
              alt={"User"}
            />
            <div className={classes.userDelCon}>
              <span>Mrityunjay Vyas</span>
              <span>mrityunjay@gmail.com</span>
            </div>
            <HiOutlineDotsVertical />
          </div>
        </>
      ) : (
        <div>
          <GiHamburgerMenu
            className={classes.hamburgerIcon}
            onClick={() =>
              setIsSbOpen((curr) => {
                return !curr;
              })
            }
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
