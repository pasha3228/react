import React, { useState, useMemo } from "react"

import { Layout } from "../../components/Layout/Layout"
import { ThemeContext } from "../../contexts/ThemeContext"
import { Provider } from "react-redux"
import { store } from "../../store"
import { RestaurantsContainer } from "../../containers/Restaurants/RestaurantsContainer"

const RestaurantsPage = () => {
  const [theme, setTheme] = useState("light")
  const themeContextValue = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={themeContextValue}>
        <Layout>
          <RestaurantsContainer />
        </Layout>
      </ThemeContext.Provider>
    </Provider>
  )
}

export default RestaurantsPage
