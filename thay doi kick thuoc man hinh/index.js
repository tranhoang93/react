import React, { useState, useEffect } from "react";

function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleChangeSize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleChangeSize);
    return () => {
      window.removeEventListener("resize", handleChangeSize);
    };
  });

  return { width, height };
}

export default useWindowSize;
