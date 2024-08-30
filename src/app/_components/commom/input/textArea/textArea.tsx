import { ChangeEvent } from "react";
import "./textArea.css";

type props = {
  placeHolder: string;
  name: string;
  value: string;
  required?: boolean;
  handleChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void;
};

export const TSGT_TextArea = ({
  placeHolder,
  name,
  value,
  required,
  handleChange
}: props) => {
  return (
    <>
      <textarea
        className="tsgt-text-area"
        rows={5}
        placeholder={placeHolder}
        name={name}
        value={value}
        required={required || false}
        onChange={handleChange}
      />
    </>
  );
};
