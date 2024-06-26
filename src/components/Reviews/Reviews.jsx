import React from "react";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";

import styles from "./styles.module.css";
import { Review } from "../Review/Review";
import { ReviewContainer } from "../../containers/Review/ReviewContainer";

const Reviews = ({ reviewIds }) => (
  <div className={styles.root}>
    <span className={styles.title}>Reviews</span>
    <div className={styles.content}>
      {reviewIds.map((reviewId) => (
        <ReviewContainer
          key={reviewId}
          reviewId={reviewId}
          className={styles.review}
        />
      ))}
      <NewReviewForm className={styles.reviews} />
    </div>
  </div>
);

export default Reviews;
