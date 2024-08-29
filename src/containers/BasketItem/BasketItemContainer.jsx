import { BasketItem } from "../../components/BasketItem/BasketItem"
import { useSelector } from "react-redux"
import { selectProductNameById } from "../../store/modules/collections/products/selectors"
import { selectProductCountById } from "../../store/modules/basket/selectors"

export const BasketItemContainer = ({ productId, className }) => {
  const productName = useSelector((state) => selectProductNameById(state, productId))

  const productCount = useSelector((state) => selectProductCountById(state, productId))

  return (
    <BasketItem productId={productId} productName={productName} productCount={productCount} className={className} />
  )
}
