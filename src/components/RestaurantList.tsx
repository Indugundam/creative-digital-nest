
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RestaurantCard } from "./RestaurantCard";
import { RestaurantFilters } from "./RestaurantFilters";
import { RestaurantPagination } from "./RestaurantPagination";
import { useRestaurantFilters } from "../hooks/useRestaurantFilters";
import { MOCK_RESTAURANTS } from "../data/mockRestaurants";

interface RestaurantListProps {
  searchQuery: string;
}

export const RestaurantList = ({ searchQuery }: RestaurantListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 8;

  const { filters, setFilters, filteredRestaurants } = useRestaurantFilters(
    MOCK_RESTAURANTS,
    searchQuery
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedRestaurants = filteredRestaurants.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto">
      <RestaurantFilters
        onCuisineChange={(value) => setFilters({ ...filters, cuisine: value })}
        onPriceRangeChange={(value) =>
          setFilters({ ...filters, priceRange: value })
        }
        onRatingChange={(value) => setFilters({ ...filters, rating: value })}
        selectedCuisine={filters.cuisine}
      />

      {filteredRestaurants.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            No restaurants found matching your criteria.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                {...restaurant}
                onClick={() => navigate(`/restaurant/${restaurant.id}`)}
              />
            ))}
          </div>

          <RestaurantPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};
