import React from "react"
import { NewReviewForm } from "../NewReviewForm/NewReviewForm"

import styles from "./styles.module.css"
import { Review } from "../Review/Review"
import { ReviewContainer } from "../../containers/Review/ReviewContainer"

const Reviews = ({ reviewsIds }) => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>Reviews</span>
      <div className={styles.content}>
        {reviewsIds.map((id) => {
          return <ReviewContainer key={id} reviewId={id} />
        })}
        <NewReviewForm className={styles.reviews} />
      </div>
    </div>
  )
}

export default Reviews
