import { useContext, useEffect, useRef, useState } from "react"
import { StoreContext } from "../context/StoreContext"
import { nanoid } from "nanoid"

export function useSelector(selector) {
  const componentId = useRef(nanoid())
  const store = useContext(StoreContext)
  const [value, setValue] = useState(selector(store.state))

  useEffect(() => {
    store.subscribe(componentId.current, (state) => {
      setValue(selector(state))
    })

    return () => store.unsubscribe(componentId)
  }, [])

  return value
}
