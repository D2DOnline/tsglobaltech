"use client";

import { lc } from "@/app/language-content/iLanguageContent";
import { useTranslations } from "use-intl";

export const AboutUs = () => {
  const t = useTranslations();
  return (
    <>
      <section id="about" className="body-content">
        <div className="section-header">{t(lc.about_heading)}</div>

        <div className="section-content flex flex-col">
          <div className="section-content-header">
            {t(lc.about_sub_heading_1)}
          </div>
          <p>{t(lc.about_sub_heading_1_text)}</p>

          <div className="section-content-header">
            {t(lc.about_sub_heading_2)}
          </div>
          <p>{t(lc.about_sub_heading_2_text)}</p>

          <div className="section-content-header">
            {t(lc.about_sub_heading_3)}
          </div>
          <p>{t(lc.about_sub_heading_3_text)}</p>

          <div className="section-content-header">
            {t(lc.about_sub_heading_4)}
          </div>
          <p>
            <strong>{t(lc.about_sub_heading_4_head_text_1)}</strong>{" "}
            {t(lc.about_sub_heading_4_text_1)}
          </p>
          <p>
            <strong>{t(lc.about_sub_heading_4_head_text_2)}</strong>{" "}
            {t(lc.about_sub_heading_4_text_2)}
          </p>
          <p>
            <strong>{t(lc.about_sub_heading_4_head_text_3)}</strong>{" "}
            {t(lc.about_sub_heading_4_text_3)}
          </p>
          <p>
            <strong>{t(lc.about_sub_heading_4_head_text_4)}</strong>{" "}
            {t(lc.about_sub_heading_4_text_4)}
          </p>
          <p>
            <strong>{t(lc.about_sub_heading_4_head_text_5)}</strong>{" "}
            {t(lc.about_sub_heading_4_text_5)}
          </p>
        </div>
      </section>
    </>
  );
};
