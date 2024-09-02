import { useEffect } from "react";
import "./snackbar.css";

type props = {
  message: string;
};

export const Snackbar = ({ message }: props) => {
  useEffect(() => {
    var x = document.getElementById("snackbar");
    if (x) {
      x.className = "show";
      setTimeout(function () {
        if(x)
        x.className = x.className.replace("show", "");
      }, 3000);
    }
  }, []);

  return (
    <>
      <div id="snackbar">{message}</div>
    </>
  );
};
