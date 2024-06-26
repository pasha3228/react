import Reviews from "../../components/Reviews/Reviews";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantReviewIdsById } from "../../store/modules/collections/restaurants/selectors";
import { selectReviewsLoadingStatus } from "../../store/modules/collections/reviews/selectors";
import React, { useEffect } from "react";
import { LOADING_STATUSES } from "../../store/constants/loading-statuses";
import { loadReviewsIfNotExistThunk } from "../../store/modules/collections/reviews/middlewares/loadReviewsIfNotExist";

export const ReviewsContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIdsById(state, { restaurantId })
  );
  const loadingStatus = useSelector(selectReviewsLoadingStatus);

  useEffect(() => {
    dispatch(loadReviewsIfNotExistThunk(restaurantId));
  }, [restaurantId]);

  if (loadingStatus === LOADING_STATUSES.InProgress) {
    return <span>Loading...</span>;
  }

  if (loadingStatus === LOADING_STATUSES.Failed) {
    return <span>Failed</span>;
  }

  if (reviewIds?.length === 0) {
    return null;
  }

  return <Reviews reviewIds={reviewIds} />;
};
