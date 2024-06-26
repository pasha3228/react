import { Review } from "../../components/Review/Review";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/modules/collections/reviews/selectors";

export const ReviewContainer = ({ reviewId, className }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  if (!review) {
    return null;
  }

  const { text, rating, userId } = review;

  return (
    <Review text={text} rating={rating} userId={userId} className={className} />
  );
};
