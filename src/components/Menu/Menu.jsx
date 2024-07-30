import React from "react"
import Product from "../Product/Product"
import styles from "./styles.module.css"

const Menu = ({ menu }) => {
  // const { size, setRef, isLoading } = useLazyLoading({
  //   maxSize: menu.length,
  // });
  //
  // const products = menu.slice(0, size);

  return (
    <div className={styles.root}>
      {menu.map(({ id, name, ingredients }, index) => (
        <Product
          key={id}
          name={name}
          ingredients={ingredients}
          className={styles.product}
          // setRef={index === size - 1 ? setRef : null}
        />
      ))}
      {/*{isLoading && <div>Loading...</div>}*/}
    </div>
  )
}

export default Menu
