import React from "react";

import styles from "./styles.module.css";
import { RestaurantTabsContainer } from "../../containers/RestaurantTabs/RestaurantTabsContainer";
import { Outlet } from "react-router-dom";
import { RestaurantSearchForm } from "../../containers/RestaurantSearchForm/RestaurantSearchForm";

export const Restaurants = () => {
  return (
    <div className={styles.root}>
      <RestaurantSearchForm />
      <RestaurantTabsContainer className={styles.tabs} />
      <Outlet />
    </div>
  );
};

export const MemoRestaurants = React.memo(Restaurants);
