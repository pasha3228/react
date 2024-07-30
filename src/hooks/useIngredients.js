import { useCallback, useState } from "react"

const useIngredients = (defaultValue) => {
  const [count, setCount] = useState(defaultValue)

  const decrement = useCallback(() => setCount((currentCount) => (currentCount ? currentCount - 1 : currentCount)), [])

  const increment = useCallback(() => {
    setCount((currentCount) => currentCount + 1)
  }, [])

  return { count, decrement, increment }
}

export default useIngredients
