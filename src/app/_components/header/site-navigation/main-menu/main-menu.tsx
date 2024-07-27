"use client";

import { MenuItems } from "./menu-items";

import "./main-menu.css";
import { HumbergerMenu } from "../humberger-menu/humberger-menu";

type props = {
  orientation: "y" | "x";
};

export const MainMenu = ({ orientation }: props) => {
  return (
    <>
      {orientation == "y" ? (
        <div className="menu-collapsed">
          <HumbergerMenu />
        </div>
      ) : (
        <div className="menu-expanded">
          <MenuItems containerStyle="menu-horizontal" />
        </div>
      )}
    </>
  );
};
