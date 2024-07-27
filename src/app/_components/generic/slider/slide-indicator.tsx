import "./slide-indicator.css";

type props = {
  isCurrent: boolean;
  loadSlide:()=>void;
};
export const SlideNavigator = ({ isCurrent, loadSlide }: props) => {
  return (
    <>
      <span className={`indicator ${isCurrent ? "active" : ""}`} onClick={loadSlide}></span>
    </>
  );
};
