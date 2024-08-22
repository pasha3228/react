import React from "react"
import Product from "../Product/Product"
import styles from "./styles.module.css"

const Menu = ({ menu }) => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>Menu</span>
      <div className={styles.content}>
        {menu.map(({ id, name, ingredients }) => (
          <Product key={id} name={name} ingredients={ingredients} className={styles.product} />
        ))}
      </div>
    </div>
  )
}

export default Menu
