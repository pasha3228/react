import React from "react"
import Tab from "../Tab/Tab"

import styles from "./styles.module.css"

const Tabs = ({ tabs, activeTabIndex, onClick }) => {
  console.log("Tabs Render")

  return (
    <div className={styles.root}>
      {tabs.map((tab, index) => (
        <Tab
          key={tab}
          isActive={index === activeTabIndex}
          onClick={() => onClick(index)}
          title={tab}
          className={styles.tab}
        />
      ))}
    </div>
  )
}
export default Tabs
