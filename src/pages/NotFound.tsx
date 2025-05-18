
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-travel-cream">
        <div className="container py-20 text-center">
          <h1 className="text-7xl md:text-9xl font-serif text-travel-teal mb-6">404</h1>
          <p className="text-2xl md:text-3xl text-travel-dark mb-8">Oops! This destination doesn't exist</p>
          <p className="text-travel-sage text-lg mb-10 max-w-md mx-auto">
            The page you're looking for may have been moved or doesn't exist.
          </p>
          <Link to="/">
            <Button className="bg-travel-terracotta hover:bg-travel-teal text-white text-lg px-8 py-6">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
