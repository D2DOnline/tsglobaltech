import "./textBox.css";

type props = {
  placeHolder:string;
}

export const TSGT_TextBox = ({placeHolder}:props) => {
  return (
    <>
      <input className="tsgt-text-box" type="text" placeholder={placeHolder}/>
    </>
  );
};
