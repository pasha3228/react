import { useContext, useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import { RouterContext } from "../context/RouterContext";

export function useRoute() {
  const componentKey = useRef(nanoid());

  const [route, setRoute] = useState();
  const router = useContext(RouterContext);

  useEffect(() => {
    router.subscribe(componentKey.current, (route) => setRoute(route));

    return () => router.unsubscribe(componentKey.current);
  }, []);

  return route;
}
