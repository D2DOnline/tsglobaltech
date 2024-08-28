"use client";
import { useTranslations } from "next-intl";
import { TSGT_Link } from "../commom/Link/link";
import "./footer.css";
import { lc } from "@/app/language-content/iLanguageContent";

import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { ContactForm } from "../contact-form/contact-form";
import { CopyrightInfo } from "../copyright-info/copyright-info";

export const Footer = () => {
  const t = useTranslations();
  return (
    <>
      <footer id="footer" className="body-content footer py-[0.5rem]">
        <div className="footer-content">
          <div className="footer-info">
            <div className="company-info">
              <div className="footer-heading">
                {t(lc.footer_sub_heading_head_text_1)}{" "}
              </div>
              <address>
                {`${t(lc.common_address_line_1)}, 
          ${t(lc.common_address_line_2)}, ${t(lc.common_address_city)}
         ,
          ${t(lc.common_address_country)}`}
              </address>
              <span>{t(lc.common_phone)}: +91 935 551 0301</span>
              <span>{t(lc.common_email)}: team@tsglobaltech.com</span>
            </div>
            <div className="useful-links">
              <div className="footer-heading">
                {t(lc.footer_sub_heading_head_text_2)}
              </div>
              <ul className="text-fontRegularColor">
                <li>
                  <TSGT_Link url="/services">
                    {t(lc.site_navigation_services)}
                  </TSGT_Link>
                </li>
                <li>
                  <TSGT_Link url="/career">
                    {t(lc.site_navigation_career)}
                  </TSGT_Link>
                </li>
                <li>
                  <TSGT_Link url="/career">
                    {t(lc.site_navigation_about_us)}
                  </TSGT_Link>
                </li>
              </ul>
            </div>

            <div className="mobile-app">
              <div className="footer-heading">
                Mobile App
              </div>
              <div className="apps-link">
                <FaAndroid className="fa-android" />
                <FaApple className="fa-apple" />
              </div>
            </div>
          </div>

          <div className="footer-contact-form flex flex-col items-center">
            <div className="footer-heading">
              {t(lc.footer_sub_heading_head_text_3)}
            </div>
            <ContactForm />
          </div>
        </div>
        <div className="copyright">
          <CopyrightInfo />
        </div>
      </footer>
    </>
  );
};
