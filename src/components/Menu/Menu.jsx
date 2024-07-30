import React, { useState, useEffect, useRef } from "react"
import Product from "../Product/Product"
import styles from "./styles.module.css"

const Menu = ({ menu }) => {
  const [items, setItems] = useState()
  const [visibleItems, setVisiableItems] = useState(3)
  const containerRef = useRef()
  useEffect(() => {
    const handleScroll = () => {
      if (
        containerRef.current &&
        containerRef.current.scrollHeight - containerRef.current.scrollTop - containerRef.current.clientHeight < 10
      )
        setVisiableItems((visibleItems) => {
          const maxItems = menu.length
          return visibleItems + 3 <= maxItems ? visibleItems + 3 : maxItems
        })
    }

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll)
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll)
      }
    }
  }, [menu])
  return (
    <div ref={containerRef} className={styles.root}>
      {menu.slice(0, visibleItems).map(({ id, name, ingredients }) => (
        <Product key={id} name={name} className={styles.product} ingredients={ingredients} />
      ))}
    </div>
  )
}

export default Menu
