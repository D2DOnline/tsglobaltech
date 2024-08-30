import { ChangeEvent } from "react";
import "./textBox.css";

type props = {
  placeHolder: string;
  type:string;
  name: string;
  value: string;
  required?: boolean;
  handleChange:(e:ChangeEvent<HTMLInputElement>)=>void;
  pattern?:string;
  minlength?:number;
  maxlength?:number;
};

export const TSGT_TextBox = ({ placeHolder, type, name, value, required, handleChange, pattern, minlength, maxlength }: props) => {
  return (
    <>
      <input
        className="tsgt-text-box"
        type={type}
        name={name}
        value={value}
        required={required || false}
        placeholder={placeHolder}
        onChange={handleChange}
        minLength={minlength || 0}
        maxLength={maxlength || 524288}
        pattern={pattern}
      />
    </>
  );
};
