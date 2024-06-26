import { Header } from "../Header/Header";

import styles from "./styles.module.css";

export const Layout = ({ children }) => (
  <div>
    <Header />
    <div className={styles.root}>{children}</div>
  </div>
);
