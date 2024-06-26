import styles from "./styles.module.css";
import React, { useState } from "react";

export const User = ({ userName, onCLick }) => {
  const [state, setState] = useState(0);
  return (
    <div>
      <span>{state}</span>
      <span className={styles.root}>{userName}</span>
      <button
        onClick={() => {
          onCLick();
          setState(state + 1);
        }}
      >
        sendName
      </button>
    </div>
  );
};
