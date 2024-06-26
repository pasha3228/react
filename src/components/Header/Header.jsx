import Logo from "./imgs/logo.svg";
import styles from "./styles.module.css";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <header className={styles.root}>
      <Link to="/" className={styles.logo}>
        <img src={Logo} loading="lazy" />
      </Link>
      <Link to="/restaurants" className={styles.link}>
        Restaurants
      </Link>
      <Link to="/basket" className={styles.link}>
        Basket
      </Link>
      <button
        onClick={() =>
          theme.setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark"
          )
        }
      >
        switchTheme
      </button>
    </header>
  );
};
