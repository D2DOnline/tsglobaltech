"use client";

import { useTranslations } from "next-intl";
import { Card } from "../commom/card/card";
import "./capabilities-cards.css";
import { lc } from "@/app/language-content/iLanguageContent";
import { iCapability } from "./iCapability";

import {
  AI,
  AndroidApp,
  Cloud,
  DesktopApp,
  IosApp,
  Migration,
  UX,
  WebDevelopment,
} from "./images";

export const Capabilities_Cards = () => {
  const t = useTranslations();

  const capabilities: iCapability[] = [
    {
      title: t(lc.capability_1_title),
      shortDiscription: t(lc.capability_1_shortDiscription),
      image: <UX />,
      imageType: "ux",
    },
    {
      title: t(lc.capability_2_title),
      shortDiscription: t(lc.capability_2_shortDiscription),
      image: <WebDevelopment />,
      imageType: "web",
    },
    {
      title: t(lc.capability_3_title),
      shortDiscription: t(lc.capability_3_shortDiscription),
      image: <AndroidApp />,
      imageType: "android",
    },
    {
      title: t(lc.capability_4_title),
      shortDiscription: t(lc.capability_4_shortDiscription),
      image: <IosApp />,
      imageType: "ios",
    },
    {
      title: t(lc.capability_5_title),
      shortDiscription: t(lc.capability_5_shortDiscription),
      image: <Migration />,
      imageType: "migration",
    },
    {
      title: t(lc.capability_6_title),
      shortDiscription: t(lc.capability_6_shortDiscription),
      image: <DesktopApp />,
      imageType: "desktop",
    },
    {
      title: t(lc.capability_7_title),
      shortDiscription: t(lc.capability_7_shortDiscription),
      image: <AI />,
      imageType: "ai",
    },
    {
      title: t(lc.capability_8_title),
      shortDiscription: t(lc.capability_8_shortDiscription),
      image: <Cloud />,
      imageType: "cloud",
    },
  ];
  return (
    <div className="body-content section-bg capabilities-cards">
      {capabilities.map((capability: iCapability, index: number) => (
        <div className="card-wrapper" key={index}>
          <Card className="h-auto md:h-[300px] w-full">
            <div className="card-content">
              <div className="card-title">{capability.title}</div>
              <div
                className={`card-body ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="card-shortDiscription">
                  {capability.shortDiscription}
                  {/* <div className="card-read-more">{t(lc.common_read_more)}</div> */}
                </div>
                <div className="card-image">
                  <div className={`image-${capability.imageType}`}>
                    {capability.image}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};
