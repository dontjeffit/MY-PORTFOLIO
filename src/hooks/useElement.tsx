import { useLayoutEffect, useRef, useState, useEffect } from "react";

const useElement = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [elementWidth, setElementWidth] = useState(0);
  const [positionLeft, setPositionLeft] = useState(0);

  useLayoutEffect(() => {
    function handleResize() {
      if (elementRef.current) {
        const width = elementRef.current.offsetWidth;
        setElementWidth(width);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [elementRef]);

  useEffect(() => {
    const handleScroll = () => {
      const el = elementRef.current;
      if (el) setPositionLeft(el.scrollLeft);
    };

    const element = elementRef.current;
    element?.addEventListener("scroll", handleScroll);

    return () => {
      element?.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef]);

  return { positionLeft, elementWidth, elementRef };
};

export default useElement;
