import React, { useContext } from "react"

import classnames from "classnames"

import styles from "./styles.module.css"
import { ThemeContext } from "../../contexts/ThemeContext"

const Tab = ({ isActive, onClick, title, className }) => {
  const theme = useContext(ThemeContext)
  console.log("Tab Render")
  console.log("Theme", theme)

  return (
    <button
      onClick={onClick}
      className={classnames(styles.root, className, {
        [styles.isActive]: isActive
      })}
    >
      {title}
    </button>
  )
}

export default Tab
