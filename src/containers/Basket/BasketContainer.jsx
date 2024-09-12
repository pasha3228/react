import { Basket } from "../../components/Basket/Basket"
import { useSelector } from "react-redux"
import { selectBasketPrice, selectBasketProductIds } from "../../store/modules/basket/selectors"

export const BasketContainer = ({ className }) => {
  const productIds = useSelector(selectBasketProductIds)
  const total = useSelector(selectBasketPrice)

  return <Basket productIds={productIds} className={className} total={total} />
}
