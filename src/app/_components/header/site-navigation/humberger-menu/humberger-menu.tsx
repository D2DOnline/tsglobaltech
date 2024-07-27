import { useEffect, useState } from "react";
import "./humberger-menu.css";
import { MenuItems } from "../main-menu/menu-items";


export const HumbergerMenu = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [containerStyle, setcs] = useState("menu-vertical menu-vertical-hide");

  function toggleMenu(isShow: boolean) {
    if (isShow) {
      setcs("menu-vertical menu-vertical-show");
    } else {
      setcs("menu-vertical menu-vertical-hide");
    }
  }

  useEffect(() => {
    toggleMenu(isShow);
  }, [isShow]);

  return (
    <div className="">
      <nav role="navigation" onClick={() => setIsShow(!isShow)}>
        <div id="menuToggle" className={`${isShow ? "show" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <MenuItems
        containerStyle={containerStyle}
        onClose={() => setIsShow(false)}
        isVertical={true}
      />
    </div>
  );
};
