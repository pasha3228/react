import styles from "./styles.module.css"
import classnames from "classnames"
import { Rating } from "../Rating/Rating"
import React from "react"

export const Review = ({ userName, text, rating, className }) => (
  <div className={classnames(styles.root, className)}>
    <div className={styles.header}>
      <span className={styles.userName}>{userName}</span>
      <Rating value={rating} size="small" />
    </div>
    <div className={styles.text}>{text}</div>
  </div>
)
