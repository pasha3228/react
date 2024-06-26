import { useRoute } from "../../hook/useRoute";

export const Routes = ({ children }) => {
  const currentRoute = useRoute();

  return (
    <>
      {children.find(
        (routeElement) =>
          !routeElement.props.to || routeElement.props.to === currentRoute
      ) || null}
    </>
  );
};
