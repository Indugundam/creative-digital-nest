
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Auth logic will be implemented later
    console.log("Sign up:", { name, email, password });
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary">Create an account</h2>
          <p className="mt-2 text-muted-foreground">Join FoodFinder today</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary">
                Password
              </label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
                placeholder="Create a password"
              />
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Button
              variant="link"
              className="p-0 text-primary"
              onClick={() => navigate("/signin")}
            >
              Sign in
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
