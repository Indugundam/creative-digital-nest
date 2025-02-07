
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RestaurantFiltersProps {
  onCuisineChange: (value: string) => void;
  onPriceRangeChange: (value: string) => void;
  onRatingChange: (value: string) => void;
}

export const RestaurantFilters = ({
  onCuisineChange,
  onPriceRangeChange,
  onRatingChange,
}: RestaurantFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white shadow-sm rounded-lg">
      <Select onValueChange={onCuisineChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Cuisine" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Cuisines</SelectItem>
          <SelectItem value="italian">Italian</SelectItem>
          <SelectItem value="indian">Indian</SelectItem>
          <SelectItem value="chinese">Chinese</SelectItem>
          <SelectItem value="japanese">Japanese</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={onPriceRangeChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Price Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Prices</SelectItem>
          <SelectItem value="$">$</SelectItem>
          <SelectItem value="$$">$$</SelectItem>
          <SelectItem value="$$$">$$$</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={onRatingChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Ratings</SelectItem>
          <SelectItem value="4">4+ Stars</SelectItem>
          <SelectItem value="3">3+ Stars</SelectItem>
          <SelectItem value="2">2+ Stars</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
