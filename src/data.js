import { GoHome, GoOrganization } from "react-icons/go";
import { GrCube } from "react-icons/gr";
import { FaArrowDownUpAcrossLine } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { PiWalletLight } from "react-icons/pi";

export const navLinks = [
  {
    title: "Home",
    icon: <GoHome />,
    goto: "/",
  },
  {
    title: "Organization",
    icon: <GoOrganization />,
    goto: "/organization",
  },
  {
    title: "Assets",
    icon: <GrCube />,
    goto: "/assets",
  },
  {
    title: "Trade",
    icon: <FaArrowDownUpAcrossLine />,
    goto: "/trade",
  },
  {
    title: "History",
    icon: <GiSandsOfTime />,
    goto: "/history",
  },
  {
    title: "Wallet",
    icon: <PiWalletLight />,
    goto: "/wallet",
  },
];
