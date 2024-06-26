import Tab from "../../components/Tab/Tab";
import { useSelector } from "react-redux";
import { selectRestaurantNameById } from "../../store/modules/collections/restaurants/selectors";

export const RestaurantTabContainer = ({ restaurantId, className }) => {
  const restaurantName = useSelector((state) =>
    selectRestaurantNameById(state, restaurantId)
  );

  return <Tab title={restaurantName} to={restaurantId} className={className} />;
};
