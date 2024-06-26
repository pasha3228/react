import { useCallback, useState } from "react";

const useIngredientCount = ({ defaultValue, min = 1, max = 5 }) => {
  const [count, setCount] = useState(defaultValue);

  const decrement = useCallback(
    () =>
      setCount((currentCount) =>
        currentCount === min ? currentCount : currentCount - 1
      ),
    [min]
  );

  const increment = useCallback(() => {
    setCount((currentCount) =>
      currentCount === max ? currentCount : currentCount + 1
    );
  }, [max]);

  return { count, decrement, increment };
};

export default useIngredientCount;
