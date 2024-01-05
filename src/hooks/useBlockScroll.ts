import { useEffect } from "react";

export const useBlockScroll = (condition: boolean) => {
  useEffect(() => {
    if (condition) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [condition]);
};
