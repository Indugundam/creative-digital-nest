
import { RestaurantList } from "@/components/RestaurantList";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add Inter font
    const link = document.createElement("link");
    link.href = "https://rsms.me/inter/inter.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <main className="bg-secondary min-h-screen">
      <RestaurantList />
    </main>
  );
};

export default Index;
