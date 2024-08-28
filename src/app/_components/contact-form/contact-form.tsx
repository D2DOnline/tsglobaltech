import { TSGT_Button } from "../commom/button/button";
import { TSGT_TextArea } from "../commom/input/textArea/textArea";
import { TSGT_TextBox } from "../commom/input/textBox/textBox";

import "./contact-form.css";

export const ContactForm = () => {
  return (
    <>
      <div className="text-name">
        <TSGT_TextBox placeHolder="Name" />
      </div>
      <div className="text-email">
        <TSGT_TextBox placeHolder="Email" />
      </div>
      <div className="text-phone">
        <TSGT_TextBox placeHolder="Phone" />
      </div>
      <div className="text-message">
        <TSGT_TextArea placeHolder="Message" />
      </div>
      <div className="button-send">
        <TSGT_Button text={"Send Message"} onClick={() => {}} />
      </div>
    </>
  );
};
