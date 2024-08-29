import { useSelector } from "react-redux"
import { Review } from "../../components/Review/Review"
import { selectReviewById } from "../../store/modules/reviews/selectors"
import { selectUserById } from "../../store/modules/users/selector"

export const ReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId))
  const { userId, text, rating } = review

  const user = useSelector((state) => selectUserById(state, userId))

  return <Review text={text} rating={rating} user={user} />
}
