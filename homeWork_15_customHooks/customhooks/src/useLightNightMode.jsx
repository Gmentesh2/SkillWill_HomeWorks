import { useState, useEffect } from "react";

const useLightNightMode = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [nightMode, setNightMode] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
    if (window.innerWidth > 576) {
      setNightMode(false);
    } else {
      setNightMode(false);
    }
  };

  const handleMode = () => {
    setNightMode((prevMode) => !prevMode)
  }



  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [width, nightMode, handleMode, setNightMode];
};

export default useLightNightMode;