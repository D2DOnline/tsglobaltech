import { TSGT_Link } from "../Link/link";
import "./button.css";

type props = {
  text: string;
  onClick: () => void;
  link?: string;
};
export const TSGT_Button = ({ text, onClick, link }: props) => {
  const btn: JSX.Element = 
    <button className="button" onClick={onClick}>
      {text}
    </button>
  ;
  return <>{link ? <TSGT_Link url={link}>{btn}</TSGT_Link> : {btn}}</>;
};
