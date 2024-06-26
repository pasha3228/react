import { useRoute } from "../../hook/useRoute";

export const Route = ({ to, element }) => {
  const route = useRoute();

  if (!!to && route !== to) {
    return null;
  }

  return element;
};
