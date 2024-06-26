import { SearchForm } from "../../components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";

export const RestaurantSearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SearchForm
      value={searchParams.get("restaurantName") || ""}
      onChange={(search) => setSearchParams({ restaurantName: search })}
    />
  );
};
