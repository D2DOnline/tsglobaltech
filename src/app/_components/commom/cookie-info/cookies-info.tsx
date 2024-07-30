"use client";
import { useTranslations } from "next-intl";
import "./cookies-info.css";
import { lc } from "@/app/language-content/iLanguageContent";
import { TSGT_Button } from "../button/button";
import { useState } from "react";

export const CookiesInfo = () => {
  const t = useTranslations();

  const [isClose, setIsClose] = useState<boolean>(false);

  return (
    <div className={`cookie-info-wrapper body-content ${isClose ? "hidden" : ""}`}>
      <div className="cookie-info">
        <p>{t(lc.common_cookies_info)}</p>
      </div>
      <div className="cookie-info-close">
        <TSGT_Button
          text={"X"}
          onClick={() => setIsClose(true)}
          link={undefined}
        />
      </div>
    </div>
  );
};
