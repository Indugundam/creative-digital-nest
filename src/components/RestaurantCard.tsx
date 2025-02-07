
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  imageUrl: string;
  distance?: string;
  onClick?: () => void;
}

export const RestaurantCard = ({
  name,
  cuisine,
  rating,
  priceRange,
  imageUrl,
  distance,
  onClick,
}: RestaurantCardProps) => {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" 
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <img
          src={imageUrl || "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"}
          alt={name}
          className="object-cover w-full h-full"
        />
        {distance && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-sm">
            {distance}
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>{cuisine}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Star className={cn("w-5 h-5", rating >= 4 ? "text-yellow-400" : "text-gray-400")} fill="currentColor" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
          <span className="text-muted-foreground">{priceRange}</span>
        </div>
      </CardContent>
    </Card>
  );
};
