import React from "react";

const useWindowDimensions = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    const resize = window.addEventListener("resize", handleResize);

    return () => window.removeEventListener(resize, handleResize);
  });

  return {
    width,
    height,
  };
};

export default useWindowDimensions;
