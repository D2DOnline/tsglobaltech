"use client";
import { TSGT_Link } from "@/app/_components/generic/Link/link";
import { lc } from "@/app/language-content/iLanguageContent";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type props = {
  containerStyle: string;
  onClose?: (isShow: boolean) => void;
  isVertical?: boolean;
};

export const MenuItems = ({ containerStyle, onClose, isVertical }: props) => {
  const t = useTranslations();
  const [cStyle, setCStyle] = useState(containerStyle);

  const pathname = usePathname();

  const listItems: React.JSX.Element = (
    <>
      <li className="active">
        <TSGT_Link url="/">{t(lc.site_navigation_home)}</TSGT_Link>
      </li>
      <li>
        <TSGT_Link url="/services">{t(lc.site_navigation_services)}</TSGT_Link>
      </li>
      <li>
        <TSGT_Link url="/career" >{t(lc.site_navigation_career)}</TSGT_Link>
      </li>
      <li>
        <TSGT_Link url="/about" >{t(lc.site_navigation_about_us)}</TSGT_Link>
      </li>
      <li>
        <TSGT_Link url="#footer" >{t(lc.site_navigation_contact_us)}</TSGT_Link>
      </li>
    </>
  );

  useEffect(() => {
    setCStyle(containerStyle);
  }, [containerStyle]);

  return isVertical ? (
    <div
      className={isVertical ? cStyle : ""}
      onClick={() => (onClose ? onClose(false) : null)}
    >
      <ul className={!isVertical ? cStyle : ""}>{listItems}</ul>
    </div>
  ) : (
    <ul className={!isVertical ? cStyle : ""}>{listItems}</ul>
  );
};
