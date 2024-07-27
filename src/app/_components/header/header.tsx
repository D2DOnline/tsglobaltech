import { Mainbar } from "./mainbar/mainbar";
import { Topbar } from "./topbar/topbar";

import "./header.css";
import { SiteLogo } from "./site-logo/site-logo";

export const Header = () => {
  return (
    <>
      <header id="header" className="body-content header">
        <Topbar />
        <Mainbar />
      </header>
    </>
  );
};
