import { Mainbar } from "./mainbar/mainbar";
import { Topbar } from "./topbar/topbar";

import "./header.css";

export const Header = () => {
  return (
    <>
      <header id="header" className="header">
        <Topbar />
        <Mainbar />
      </header>
    </>
  );
};
