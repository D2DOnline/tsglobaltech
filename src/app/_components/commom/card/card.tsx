import "./card.css";

type props = {
  className?:string;
  children:JSX.Element
};
export const Card = ({ className, children }: props) => {
  return (
    <>
      <div className={`card ${className || ""}`} >{children}</div>
    </>
  );
};
