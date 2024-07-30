import "./banner.css";

type props = {
  children: React.ReactNode;
  isFullHeight?:boolean;
};

export const Banner = ({ children, isFullHeight=true }: props) => {
  return (
    <div className="banner">
      <span className="wave"></span>
      <span className="wave"></span>
      <span className="wave"></span>
      <div className={`baneer-background ${isFullHeight?"":"h-[10vh]"}`}>{children}</div>
    </div>
  );
};
