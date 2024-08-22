import React from "react"

import styles from "./styles.module.css"

const Tabs = ({ tabIds, activeTabIndex, onClick, renderTab }) => {
  return (
    <div className={styles.root}>
      {tabIds.map((id, index) =>
        renderTab({
          id,
          onClick: () => onClick(index),
          isActive: index === activeTabIndex,
          className: styles.tab
        })
      )}
    </div>
  )
}

export default Tabs
