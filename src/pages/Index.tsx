
import { RestaurantList } from "@/components/RestaurantList";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Add Inter font
    const link = document.createElement("link");
    link.href = "https://rsms.me/inter/inter.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <main className="bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary animate-fade-up">
            Welcome to FoodFinder
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-up">
            Discover amazing restaurants and cuisines near you
          </p>
          <div className="relative max-w-xl mx-auto mb-12 animate-fade-up">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search restaurants or cuisines..."
              className="pl-10 h-12 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <RestaurantList searchQuery={searchQuery} />
      </div>
    </main>
  );
};

export default Index;
