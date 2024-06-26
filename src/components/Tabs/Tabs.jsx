import React from "react";

import styles from "./styles.module.css";
import classnames from "classnames";

const Tabs = ({ tabIds, activeTabIndex, onClick, renderTab, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      {tabIds.map((id, index) =>
        renderTab({
          id,
          onClick: () => onClick(index),
          isActive: index === activeTabIndex,
          className: styles.tab,
        })
      )}
    </div>
  );
};

export default Tabs;
