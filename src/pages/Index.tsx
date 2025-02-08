
import { RestaurantList } from "@/components/RestaurantList";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, LogIn, UserPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://rsms.me/inter/inter.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <main className="bg-secondary min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-primary">FoodFinder</h2>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
              onClick={() => navigate('/signin')}
            >
              <LogIn className="w-4 h-4" /> Sign In
            </Button>
            <Button 
              size="sm" 
              className="flex items-center gap-2"
              onClick={() => navigate('/signup')}
            >
              <UserPlus className="w-4 h-4" /> Sign Up
            </Button>
          </div>
        </div>
      </header>
      
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
