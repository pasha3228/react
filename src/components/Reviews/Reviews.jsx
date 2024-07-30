import React from "react"
import { NewReviewForm } from "../NewReviewForm/NewReviewForm"

import styles from "./styles.module.css"

const Reviews = ({ reviews }) => (
  <dl>
    {reviews.map(({ id, user, text }) => (
      <React.Fragment key={id}>
        <dt>{user}</dt>
        <dd>{text}</dd>
      </React.Fragment>
    ))}
    <NewReviewForm className={styles.reviews} />
  </dl>
)

export default Reviews
