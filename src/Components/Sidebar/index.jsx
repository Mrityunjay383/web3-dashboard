import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";

import classes from "./index.module.css";
import SbNavLinks from "../SbNavLinks";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsBell } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdOutlineSettings } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.top}>
        <Link className={classes.logo} to={"/"}>
          Logo
        </Link>
        <GiHamburgerMenu />
      </div>

      <div className={classes.searchCon}>
        <IoSearch />
        <input type="text" placeholder={"Search..."} />
      </div>

      <SbNavLinks />

      <div className={classes.impLinks}>
        <div>
          <BsBell />
          <span>Notification</span>
        </div>
        <div>
          <FaRegQuestionCircle />
          <span>Support</span>
        </div>
        <div>
          <MdOutlineSettings />
          <span>Settings</span>
        </div>
      </div>

      <div className={classes.userBox}>
        <img
          className={classes.userImg}
          src={require("../../Assets/user-profile-placeholder-image.jpg")}
          alt={"User Image"}
        />
        <div className={classes.userDelCon}>
          <span>Mrityunjay Vyas</span>
          <span>mrityunjay@gmail.com</span>
        </div>
        <HiOutlineDotsVertical />
      </div>
    </div>
  );
};

export default Sidebar;
