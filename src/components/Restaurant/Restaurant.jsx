import React from "react";
import styles from "./styles.module.css";
import { MenuContainer } from "../../containers/Menu/MenuContainer";
import { ReviewsContainer } from "../../containers/Reviews/ReviewsContainer";
import { RestaurantRatingContainer } from "../../containers/RestaurantRating/RestaurantRatingContainer";

const Restaurant = ({ restaurantId, name }) => {
  return (
    <div className={styles.root}>
      <div className={styles.restaurantInfo}>
        <div className={styles.title}>{name}</div>
        <RestaurantRatingContainer restaurantId={restaurantId} />
      </div>
      <MenuContainer restaurantId={restaurantId} />
      <ReviewsContainer restaurantId={restaurantId} />
    </div>
  );
};

export default Restaurant;
