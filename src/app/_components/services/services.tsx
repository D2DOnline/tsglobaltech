"use client";

import { lc } from "@/app/language-content/iLanguageContent";
import { useTranslations } from "next-intl";
import { FaDesktop } from "react-icons/fa";

export const Services = () => {
  const t = useTranslations();
  return (
    <>
      <section id="services" className="body-content">
        <div className="section-header">{t(lc.services_heading)}</div>

        <div className="section-content flex flex-col">
          <div className="bg-sectionBg p-10 my-5">
            <div className="section-content-header">
              {t(lc.services_sub_heading_head_text_1)}
            </div>
            <p>{t(lc.services_sub_heading_text_1)}</p>
          </div>
          <div className="bg-sectionBg p-10 my-5">
            <div className="section-content-header">
              {t(lc.services_sub_heading_head_text_2)}
            </div>
            <p>{t(lc.services_sub_heading_text_1)}</p>
          </div>
          <div className="bg-sectionBg p-10 my-5">
            <div className="section-content-header">
              {t(lc.services_sub_heading_head_text_3)}
            </div>
            <p>{t(lc.services_sub_heading_text_1)}</p>
          </div>
          <div className="bg-sectionBg p-10 my-5">
            <div className="section-content-header">
              {t(lc.services_sub_heading_head_text_4)}
            </div>
            <p>{t(lc.services_sub_heading_text_1)}</p>
          </div>
        </div>
      </section>
    </>
  );
};
