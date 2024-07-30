"use client";
import { useTranslations } from "next-intl";
import { TSGT_Link } from "../commom/Link/link";
import "./footer.css";
import { lc } from "@/app/language-content/iLanguageContent";

export const Footer = () => {
  const t = useTranslations();
  return (
    <>
      <footer
        id="footer"
        className="body-content footer section-bg py-[0.5rem]"
      >
        <div className="flex flex-col md:flex-row justify-between">
          {/* <div className="footer-top-left"> */}
          {/* <div className="pr-10"> */}
          <div className="py-0.5 md:w-1/3">
            <div className="footer-heading">{t(lc.footer_sub_heading_head_text_1)} </div>
            <p>&apos;{t(lc.footer_sub_heading_head_text_1)}&apos;</p>{t(lc.footer_sub_heading_text_1)}
          </div>

          {/* <div className="footer-newsletter py-0.5">
                <h3>Our Newsletter</h3>
                <p>Subscribe us to keep update.</p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div> */}
          {/* </div> */}
          <div className="py-0.5 md:w-1/3">
            <div className="footer-heading">{t(lc.footer_sub_heading_head_text_2)}</div>
            <ul className="text-fontRegularColor">
              <li>
                <TSGT_Link url="/services">{t(lc.site_navigation_services)}</TSGT_Link>
              </li>
              <li>
                <TSGT_Link url="/career">{t(lc.site_navigation_career)}</TSGT_Link>
              </li>
              <li>
                <TSGT_Link url="/career">{t(lc.site_navigation_about_us)}</TSGT_Link>
              </li>
            </ul>
          </div>

          {/* <div className="footer-top-left-col2"> */}

          <div className="py-0.5 md:1/3">
            <div className="footer-heading">{t(lc.footer_sub_heading_head_text_3)}</div>
            <p>
            {t(lc.common_address_line_1)}
              <br />
              {t(lc.common_address_line_2)}, {t(lc.common_address_city)}
              <br />
              {t(lc.common_address_country)}
              <br />
              <strong>{t(lc.common_phone)}:</strong> +91 9355510301
              <br />
              <strong>{t(lc.common_email)}:</strong> sales@tsglobaltech.com
              <br />
            </p>
          </div>

          {/* <div className="social-links">
                      <a href="#" className="twitter">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#" className="facebook">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#" className="instagram">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="#" className="linkedin">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div> */}
          {/* </div> */}
          {/* </div> */}

          {/* <div id="sendMessage" className="footer-top-right mr-auto py-0.5">
            <div className="form">
              <h3>Send us a message / Join Us</h3>
              <p></p>
              <form action="" method="post" role="form" className="contactForm">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                  <div className="validation"></div>
                </div>

                <div id="sendmessage">
                  Your message has been sent. Thank you!
                </div>
                <div id="errormessage"></div>

                <div className="text-center">
                  <button type="submit" title="Send Message">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </footer>
    </>
  );
};
