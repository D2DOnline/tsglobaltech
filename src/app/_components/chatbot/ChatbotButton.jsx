import { TSGT_Button } from "../commom/button/button";

export const ChatbotButton = () => {
  return (
    // <div style={{ position: "fixed", zIndex: 99999, bottom: "0", right: "0", padding: "100px" }}>
      <TSGT_Button
        text={"Ask AI"}
        type={"button"}
        link={"/chatbot"}
      />
    // </div>
  )
}