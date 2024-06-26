import styles from "./styles.module.css";
import classnames from "classnames";
import { Rating } from "../Rating/Rating";
import React from "react";
import { UserContainer } from "../../containers/User/UserContainer";

export const Review = ({ userId, text, rating, className }) => (
  <div className={classnames(styles.root, className)}>
    <div className={styles.header}>
      <UserContainer userId={userId} />
      <Rating value={rating} size="small" />
    </div>
    <div className={styles.text}>{text}</div>
  </div>
);
