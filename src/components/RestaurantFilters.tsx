
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
  selectedCuisine: string;
}

export const RestaurantFilters = ({
  onCuisineChange,
  onPriceRangeChange,
  onRatingChange,
  selectedCuisine,
}: RestaurantFiltersProps) => {
  const getPriceRangeOptions = (cuisine: string) => {
    if (cuisine === "indian") {
      return [
        { value: "all", label: "All Prices" },
        { value: "$", label: "Under ₹300" },
        { value: "$$", label: "₹300-₹600" },
        { value: "$$$", label: "₹600+" },
      ];
    }
    return [
      { value: "all", label: "All Prices" },
      { value: "$", label: "Under $15" },
      { value: "$$", label: "$15-$30" },
      { value: "$$$", label: "$30+" },
    ];
  };

  return (
    <div className="flex flex-wrap gap-4 p-6 bg-white shadow-sm rounded-lg mb-8 relative z-10">
      <Select onValueChange={onCuisineChange}>
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Cuisine" />
        </SelectTrigger>
        <SelectContent className="bg-white z-50">
          <SelectItem value="all">All Cuisines</SelectItem>
          <SelectItem value="italian">Italian</SelectItem>
          <SelectItem value="indian">Indian</SelectItem>
          <SelectItem value="chinese">Chinese</SelectItem>
          <SelectItem value="japanese">Japanese</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={onPriceRangeChange}>
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Price Range" />
        </SelectTrigger>
        <SelectContent className="bg-white z-50">
          {getPriceRangeOptions(selectedCuisine).map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={onRatingChange}>
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Rating" />
        </SelectTrigger>
        <SelectContent className="bg-white z-50">
          <SelectItem value="all">All Ratings</SelectItem>
          <SelectItem value="4">4+ Stars</SelectItem>
          <SelectItem value="3">3+ Stars</SelectItem>
          <SelectItem value="2">2+ Stars</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
