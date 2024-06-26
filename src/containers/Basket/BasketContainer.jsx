import { Basket } from "../../components/Basket/Basket";
import { useSelector } from "react-redux";
import {
  selectBasketProductIds,
  selectFinalPrice,
} from "../../store/modules/basket/selectors";

export const BasketContainer = ({ className }) => {
  const productIds = useSelector(selectBasketProductIds);
  const finalPrice = useSelector(selectFinalPrice);

  return (
    <Basket
      productIds={productIds}
      finalPrice={finalPrice}
      className={className}
    />
  );
};
