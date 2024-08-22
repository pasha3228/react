import Tab from "../../components/Tab/Tab"
import { useSelector } from "react-redux"
import { selectRestaurantNameById } from "../../custom-store/modules/restaurants/selectors"

export const RestaurantTabContainer = ({ restaurantId, onClick, isActive, className }) => {
  const restaurantName = useSelector((state) => selectRestaurantNameById(state, restaurantId))

  return <Tab title={restaurantName} onClick={onClick} isActive={isActive} className={className} />
}
