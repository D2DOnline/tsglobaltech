import { SiteLogo } from "@/app/_components/site-logo/site-logo";
import { MainMenu } from "../site-navigation/main-menu";

import "./mainbar.css";

export const Mainbar = () => {
  return (
    <>
      <div className="mainbar body-content expended-nav-header">
        <SiteLogo/>
        <MainMenu orientation="x" />
      </div>
      <div className="mainbar body-content collapsed-nav-header">
        <div className="cpllapsed-nav h-[2.5rem]">
          <MainMenu orientation="y" />
        </div>
        <SiteLogo/>
      </div>
    </>
  );
};
