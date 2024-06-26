import { Provider } from "react-redux";
import { store } from "./store";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import { BasketPage } from "./pages/BasketPage/BasketPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RestaurantContainer } from "./containers/Restaurant/RestaurantContainer";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants" element={<RestaurantsPage />}>
            <Route path="" element={<span>Select Restaurant</span>} />
            <Route path=":restaurantId" element={<RestaurantContainer />} />
          </Route>
          <Route path="/basket" element={<BasketPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

// /restaurants/:restaurantId/:productId
