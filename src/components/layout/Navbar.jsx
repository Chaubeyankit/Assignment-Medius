import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems } from "@/utils/data";
import { Icons } from "@/icon/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  // State to track scrolling for shadow effect
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Empty div to prevent content from being hidden behind navbar */}
      <div className="h-16"></div>

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full h-16 flex items-center gap-4 px-4 md:px-8 bg-white z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-green-600">Better</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-row items-center gap-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="transition-colors hover:text-green-600"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="ml-auto md:hidden text-gray-700"
            >
              <Icons.Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              {/* Mobile Logo */}
              <Link to="/" className="flex items-center gap-2">
                <h1 className="text-xl font-semibold text-green-600">Better</h1>
              </Link>

              {/* Mobile Menu Items */}
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  className="text-gray-700 transition-colors hover:text-green-600"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
