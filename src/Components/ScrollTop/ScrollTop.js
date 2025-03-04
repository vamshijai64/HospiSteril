import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Makes the scroll animation smooth
        });
      }, 100); // Delay to ensure it works properly
  
    }, [pathname]);
  
    return null;
  }

export default ScrollToTop;
