
import { RestaurantCard } from "./RestaurantCard";
import { RestaurantFilters } from "./RestaurantFilters";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Temporary mock data
const MOCK_RESTAURANTS = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Restaurant ${i + 1}`,
  cuisine: ["Italian", "Indian", "Chinese", "Japanese"][Math.floor(Math.random() * 4)],
  rating: Math.random() * 2 + 3,
  priceRange: ["$", "$$", "$$$"][Math.floor(Math.random() * 3)],
  imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  distance: `${Math.floor(Math.random() * 5) + 1} km`,
}));

export const RestaurantList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    cuisine: "all",
    priceRange: "all",
    rating: "all",
  });
  
  const navigate = useNavigate();
  const itemsPerPage = 8;

  // Filter restaurants based on selected filters
  const filteredRestaurants = MOCK_RESTAURANTS.filter((restaurant) => {
    if (filters.cuisine !== "all" && restaurant.cuisine.toLowerCase() !== filters.cuisine) return false;
    if (filters.priceRange !== "all" && restaurant.priceRange !== filters.priceRange) return false;
    if (filters.rating !== "all" && restaurant.rating < parseInt(filters.rating)) return false;
    return true;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedRestaurants = filteredRestaurants.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <RestaurantFilters
        onCuisineChange={(value) => setFilters({ ...filters, cuisine: value })}
        onPriceRangeChange={(value) => setFilters({ ...filters, priceRange: value })}
        onRatingChange={(value) => setFilters({ ...filters, rating: value })}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {displayedRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            {...restaurant}
            onClick={() => navigate(`/restaurant/${restaurant.id}`)}
          />
        ))}
      </div>

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => setCurrentPage(page)}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
