import { useCallback, useState } from "react";

export const useLazyLoading = ({ defaultCount = 4, stepSize = 2, maxSize }) => {
  const [size, setSize] = useState(defaultCount);
  const [isLoading, setIsLoading] = useState(false);

  const onInView = useCallback((entries, observer) => {
    if (entries.length > 0 && entries[0].intersectionRatio > 0) {
      observer?.disconnect();

      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setSize((currentSize) => currentSize + stepSize);
      }, 5000);
    }
  }, []);

  const setRef = useCallback(
    (element) => {
      if (size >= maxSize || !element) {
        return;
      }

      const observer = new IntersectionObserver(onInView, {
        root: element.parentElement,
      });

      observer.observe(element);
    },
    [maxSize, size]
  );

  return { size: size > maxSize ? maxSize : size, isLoading, setRef };
};
