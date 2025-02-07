import { RestaurantCard } from "./RestaurantCard";
import { RestaurantFilters } from "./RestaurantFilters";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Temporary mock data with real restaurant names and different images
const MOCK_RESTAURANTS = [
  {
    id: 1,
    name: "The Golden Lotus",
    cuisine: "Chinese",
    rating: 4.5,
    priceRange: "$$$",
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop",
    distance: "1.2 km",
  },
  {
    id: 2,
    name: "Bella Italia",
    cuisine: "Italian",
    rating: 4.8,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=800&auto=format&fit=crop",
    distance: "2.1 km",
  },
  {
    id: 3,
    name: "Taj Mahal Palace",
    cuisine: "Indian",
    rating: 4.6,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop",
    distance: "0.8 km",
  },
  {
    id: 4,
    name: "Sakura Japanese",
    cuisine: "Japanese",
    rating: 4.7,
    priceRange: "$$$",
    imageUrl: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&auto=format&fit=crop",
    distance: "3.2 km",
  },
  {
    id: 5,
    name: "Mediterranean Breeze",
    cuisine: "Italian",
    rating: 4.3,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&auto=format&fit=crop",
    distance: "1.5 km",
  },
  {
    id: 6,
    name: "Spice Garden",
    cuisine: "Indian",
    rating: 4.4,
    priceRange: "$",
    imageUrl: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&auto=format&fit=crop",
    distance: "2.8 km",
  },
  {
    id: 7,
    name: "Dragon Palace",
    cuisine: "Chinese",
    rating: 4.2,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800&auto=format&fit=crop",
    distance: "1.9 km",
  },
  {
    id: 8,
    name: "Sushi Master",
    cuisine: "Japanese",
    rating: 4.9,
    priceRange: "$$$",
    imageUrl: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&auto=format&fit=crop",
    distance: "2.4 km",
  },
  {
    id: 9,
    name: "Roma Trattoria",
    cuisine: "Italian",
    rating: 4.5,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&auto=format&fit=crop",
    distance: "3.0 km",
  },
  {
    id: 10,
    name: "Beijing House",
    cuisine: "Chinese",
    rating: 4.3,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&auto=format&fit=crop",
    distance: "1.7 km",
  },
  {
    id: 11,
    name: "Mumbai Spices",
    cuisine: "Indian",
    rating: 4.6,
    priceRange: "$",
    imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop",
    distance: "2.2 km",
  },
  {
    id: 12,
    name: "Tokyo Fusion",
    cuisine: "Japanese",
    rating: 4.7,
    priceRange: "$$$",
    imageUrl: "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?w=800&auto=format&fit=crop",
    distance: "3.5 km",
  },
  {
    id: 13,
    name: "Pasta Paradise",
    cuisine: "Italian",
    rating: 4.4,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&auto=format&fit=crop",
    distance: "2.6 km",
  },
  {
    id: 14,
    name: "Canton Delight",
    cuisine: "Chinese",
    rating: 4.2,
    priceRange: "$",
    imageUrl: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=800&auto=format&fit=crop",
    distance: "1.4 km",
  },
  {
    id: 15,
    name: "Chennai Kitchen",
    cuisine: "Indian",
    rating: 4.5,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop",
    distance: "2.9 km",
  },
  {
    id: 16,
    name: "Kyoto Express",
    cuisine: "Japanese",
    rating: 4.3,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop",
    distance: "3.3 km",
  },
  {
    id: 17,
    name: "Venice Kitchen",
    cuisine: "Italian",
    rating: 4.6,
    priceRange: "$$$",
    imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop",
    distance: "1.8 km",
  },
  {
    id: 18,
    name: "Szechuan Garden",
    cuisine: "Chinese",
    rating: 4.4,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800&auto=format&fit=crop",
    distance: "2.5 km",
  },
  {
    id: 19,
    name: "Curry House",
    cuisine: "Indian",
    rating: 4.7,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1631452180775-4bd3e06f37e5?w=800&auto=format&fit=crop",
    distance: "3.1 km",
  },
  {
    id: 20,
    name: "Osaka Sushi",
    cuisine: "Japanese",
    rating: 4.8,
    priceRange: "$$$",
    imageUrl: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=800&auto=format&fit=crop",
    distance: "2.7 km",
  },
];

interface RestaurantListProps {
  searchQuery: string;
}

export const RestaurantList = ({ searchQuery }: RestaurantListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    cuisine: "all",
    priceRange: "all",
    rating: "all",
  });
  
  const navigate = useNavigate();
  const itemsPerPage = 8;

  // Filter restaurants based on selected filters and search query
  const filteredRestaurants = MOCK_RESTAURANTS.filter((restaurant) => {
    // Search filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      const nameMatch = restaurant.name.toLowerCase().includes(searchLower);
      const cuisineMatch = restaurant.cuisine.toLowerCase().includes(searchLower);
      if (!nameMatch && !cuisineMatch) return false;
    }

    // Other filters
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
    <div className="max-w-7xl mx-auto">
      <RestaurantFilters
        onCuisineChange={(value) => setFilters({ ...filters, cuisine: value })}
        onPriceRangeChange={(value) => setFilters({ ...filters, priceRange: value })}
        onRatingChange={(value) => setFilters({ ...filters, rating: value })}
      />

      {filteredRestaurants.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No restaurants found matching your criteria.</p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
