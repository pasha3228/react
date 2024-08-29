import { Basket } from "../../components/Basket/Basket"
import { useSelector } from "react-redux"
import { selectBasketProductIds } from "../../store/modules/basket/selectors"

export const BasketContainer = ({ className }) => {
  const productIds = useSelector(selectBasketProductIds)

  return <Basket productIds={productIds} className={className} />
}
