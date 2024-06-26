import { Rating } from "../../components/Rating/Rating";
import { useSelector } from "react-redux";
import { selectRestaurantRating } from "../../store/modules/collections/restaurants/selectors";

export const RestaurantRatingContainer = ({ restaurantId }) => {
  const rating = useSelector((state) =>
    selectRestaurantRating(state, { restaurantId })
  );

  return <Rating value={rating} />;
};
