import Product from "./Product"
import { withCount } from "../../hocs/with-count"

export const ProductWithCount = withCount(Product)
