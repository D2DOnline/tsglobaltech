import { iSlideContent } from "./interface";
import "./slide.css";
import { TSGT_Button } from "../button/button";

type props = {
  content: iSlideContent;
  isCurrent: boolean;
};
export const Slide = ({ content, isCurrent }: props) => {
  return (
    <>
      <div className={`slide fade ${isCurrent ? "current-slide" : ""}`}>
        <div className="heading">{content.heading}</div>
        <br/>
        <div className="text">{content.text}</div>
        <br/>
        <br/>
        <div className="slide-button"><TSGT_Button type={"button"} text={content.buttonText} onClick={() => null} link={content.link} /></div>
      </div>
    </>
  );
};
