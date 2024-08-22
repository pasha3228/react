import React, { useState, useMemo } from "react"

import { Layout } from "../../components/Layout/Layout"
import { ThemeContext } from "../../contexts/ThemeContext"
import { MemoRestaurants } from "../../components/Restaurants/Restaurants"
import { StoreProvider } from "../../store/components/StoreProvider/StoreProvider"

const RestaurantsPage = () => {
  const [theme, setTheme] = useState("light")
  const themeContextValue = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <StoreProvider>
      <ThemeContext.Provider value={themeContextValue}>
        <Layout>
          <MemoRestaurants />
        </Layout>
      </ThemeContext.Provider>
    </StoreProvider>
  )
}

export default RestaurantsPage
