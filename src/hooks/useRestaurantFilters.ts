import { useState, useMemo } from 'react';
import { Restaurant } from '../data/mockRestaurants';

interface Filters {
  cuisine: string;
  priceRange: string;
  rating: string;
}

export const useRestaurantFilters = (restaurants: Restaurant[], searchQuery: string) => {
  const [filters, setFilters] = useState<Filters>({
    cuisine: "all",
    priceRange: "all",
    rating: "all",
  });

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((restaurant) => {
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
  }, [restaurants, searchQuery, filters]);

  return {
    filters,
    setFilters,
    filteredRestaurants,
  };
};
