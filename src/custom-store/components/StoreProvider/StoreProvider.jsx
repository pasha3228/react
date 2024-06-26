import { StoreContext } from "../../context/StoreContext";
import { store } from "../../store";

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
