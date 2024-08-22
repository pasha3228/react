import React from "react"
import { NewReviewForm } from "../NewReviewForm/NewReviewForm"

import styles from "./styles.module.css"
import { Review } from "../Review/Review"

const Reviews = ({ reviews }) => (
  <div className={styles.root}>
    <span className={styles.title}>Reviews</span>
    <div className={styles.content}>
      {reviews.map(({ id, user, text }) => (
        <Review key={id} text={text} userName={user} className={styles.review} />
      ))}
      <NewReviewForm className={styles.reviews} />
    </div>
  </div>
)

export default Reviews
