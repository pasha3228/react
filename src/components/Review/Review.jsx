import styles from "./styles.module.css"
import classnames from "classnames"
import { Rating } from "../Rating/Rating"
import React from "react"

export const Review = ({ text, rating, className, user }) => (
  <div className={classnames(styles.root, className)}>
    <div className={styles.header}>
      <span className={styles.userName}>{user.name}</span>
      <Rating value={rating} size="small" />
    </div>
    <div className={styles.text}>{text}</div>
  </div>
)
