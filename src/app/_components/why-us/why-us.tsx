"use client";

import { lc } from "@/app/language-content/iLanguageContent";
import { useTranslations } from "next-intl";

export const WhyUs = () => {
  const t = useTranslations();
  return (
    <>
      <section id="why-us" className="body-content">
        <div className="section-header">{t(lc.whyUs_heading)}</div>

        <div className="section-content flex flex-col">
          <div className="section-content-header">
            {t(lc.whyUs_sub_heading_head_text_1)}
          </div>
          <p>{t(lc.whyUs_sub_heading_text_1)}</p>
          <div className="section-content-header">
            {t(lc.whyUs_sub_heading_head_text_2)}
          </div>
          <p>{t(lc.whyUs_sub_heading_text_2)}</p>
          <div className="section-content-header">
            {t(lc.whyUs_sub_heading_head_text_3)}
          </div>
          <p>{t(lc.whyUs_sub_heading_text_3)}</p>
          <div className="section-content-header">
            {t(lc.whyUs_sub_heading_head_text_4)}
          </div>
          <p>{t(lc.whyUs_sub_heading_text_4)}</p>
          <div className="section-content-header">
            {t(lc.whyUs_sub_heading_head_text_5)}
          </div>
          <p>{t(lc.whyUs_sub_heading_text_5)}</p>
        </div>
      </section>
    </>
  );
};
