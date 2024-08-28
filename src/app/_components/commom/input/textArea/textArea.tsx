import "./textArea.css";

type props = {
  placeHolder:string;
}


export const TSGT_TextArea = ({placeHolder}:props) => {
    return (
      <>
        <textarea className="tsgt-text-area" rows={5} placeholder={placeHolder}/>
      </>
    );
  };