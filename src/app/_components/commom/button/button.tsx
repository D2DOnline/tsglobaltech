import { TSGT_Link } from "../Link/link";
import "./button.css";

type props = {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  link?: string;
  disabled?:boolean;
};
export const TSGT_Button = ({ text, type, onClick, link, disabled }: props) => {
  const btn: JSX.Element = 
    <button className="button" type={type} onClick={onClick} disabled={disabled}>
      {disabled? <div className="loader"></div>: ""}{text}
    </button>
  ;
  return <>{link ? <TSGT_Link url={link}>{btn}</TSGT_Link> : <>{btn}</>}</>;
};
