import { useSnackbar } from "@/context/snackbar-context";
import { TSGT_Button } from "../commom/button/button";
import { TSGT_TextArea } from "../commom/input/textArea/textArea";
import { TSGT_TextBox } from "../commom/input/textBox/textBox";
import { Snackbar } from "../commom/snackbar/snackbar";

import "./contact-form.css";
import { ChangeEvent, FormEvent, useState } from "react";

type ContactEmailProps = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export const ContactForm = () => {

  const showSnackbar = useSnackbar();

  const [formData, setFormData] = useState<ContactEmailProps>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: ContactEmailProps) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   

    if (!formData.email || !formData.fullName || !formData.message) {
      showSnackbar(`Fullname, Email and message are required fields!`, "info");
      return;
    }

    try {
      setIsSending(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        // alert("Email Sent Successfully!");
        showSnackbar(`Email Sent Successfully!`, "success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        showSnackbar(`There was a problem sending email. Pls try again!`, "error");
      }
    } catch (error) {
      console.log("Error sending email:", error);
      showSnackbar(`There was a problem sending email. Pls try again!`, "error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="text-name">
        <TSGT_TextBox
          placeHolder={"Name: 3 to 25 characters"}
          type={"text"}
          name={"fullName"}
          value={formData.fullName}
          required={true}
          handleChange={handleChange}
          minlength={3}
          maxlength={25}
        />
      </div>
      <div className="text-email">
        <TSGT_TextBox
          placeHolder="Email"
          type={"email"}
          name={"email"}
          value={formData.email}
          required={true}
          handleChange={handleChange}
        />
      </div>
      <div className="text-phone">
        <TSGT_TextBox
          placeHolder={"Phone: +91 9355510301"}
          type={"tel"}
          name={"phone"}
          value={formData.phone}
          handleChange={handleChange}
        />
      </div>
      <div className="text-message">
        <TSGT_TextArea
          placeHolder="Message"
          name={"message"}
          value={formData.message}
          required={true}
          handleChange={handleChange}
        />
      </div>
      <div className="button-send">
        <TSGT_Button text={"Send Message"} type={"submit"} disabled={isSending}/>
      </div>
    </form>
  );
};
