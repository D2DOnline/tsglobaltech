"use client";
import { lc } from "@/app/language-content/iLanguageContent";
import { useTranslations } from "next-intl";

export const Career = () => {
  const t = useTranslations();
  return (
    <>
      <section id="onJobTraining" className="body-content">
        <div className="section-header">{t(lc.site_navigation_career)}</div>

        <div className="section-content flex flex-col">
          <div className="section-item-box">
            <div className="section-content-header">
              {t(lc.career_option_AI_ML_heading)}
            </div>
            <p>{t(lc.career_option_not_open_position_message)}</p>
          </div>

          <p></p>
          <div className="section-item-box">
            <div className="section-content-header">
              {t(lc.career_option_web_heading)}
            </div>
            <p>{t(lc.career_option_not_open_position_message)}</p>
          </div>
          <p></p>

          <div className="section-item-box">
            <div className="section-content-header">
              {t(lc.career_option_mobile_heading)}
            </div>
            <p>{t(lc.career_option_not_open_position_message)}</p>
          </div>
          <p></p>
        </div>
      </section>
    </>
  );
};
