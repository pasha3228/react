import React from "react";

import classnames from "classnames";

import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

const Tab = ({ to, title, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classnames(styles.root, className, {
          [styles.isActive]: isActive,
        })
      }
    >
      {title}
    </NavLink>
  );
};

export default Tab;
