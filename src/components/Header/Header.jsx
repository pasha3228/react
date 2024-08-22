import Logo from "./imgs/logo.svg"
import styles from "./styles.module.css"
import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

export const Header = () => {
  const theme = useContext(ThemeContext)

  return (
    <header className={styles.root}>
      <img src={Logo} loading="lazy" className={styles.logo} />
      <button onClick={() => theme.setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}>
        switchTheme
      </button>
    </header>
  )
}
