import { useState, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import homePageImg from "@/assets/home-page-img.webp";
import Arina from "@/assets/still-quote-Arian.webp";
import { Icons } from "@/icon/icons";

export const Home = memo(function Home() {
  // Testimonial Data
  const testimonials = [
    {
      name: "Arina",
      image: Arina,
      quote:
        "Better made my home-buying experience incredibly easy and stress-free!",
    },
    {
      name: "Amanda",
      image:
        "https://media.better.com/better-com/homepage/social-proof/still-quote-Amanda.webp",
      quote:
        "I was amazed at how simple the process was. The best mortgage experience ever!",
    },
    {
      name: "Paul",
      image:
        "https://media.better.com/better-com/homepage/social-proof/still-quote-Paul.webp",
      quote:
        "Fast, transparent, and efficient—Better.com truly lives up to its name.",
    },
  ];

  // State to track selected testimonial
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[0]
  );

  const handleTestimonialChange = useCallback((t) => {
    setSelectedTestimonial(t);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen flex items-center justify-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${homePageImg})` }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-green-900 opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-6xl font-bold leading-tight drop-shadow-lg">
            Mortgages <br /> made simple
          </h1>

          {/* CTA Button */}
          <div className="mt-6">
            <Button className="px-8 py-3 text-lg font-semibold bg-green-500 hover:bg-green-600 rounded-full shadow-lg">
              Start Approval
            </Button>
            <p className="mt-2 text-sm font-medium">
              {" "}
              ⏰ 3 min | No credit impact
            </p>
          </div>

          {/* Star Rating */}
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(4)].map((_, i) => (
              <Icons.Star
                key={i}
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
              />
            ))}
            <Icons.Star className="w-6 h-6 fill-yellow-400 text-yellow-400 opacity-70" />
            <span className="ml-2 text-xl font-semibold">4.5 / 5</span>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto py-20 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* ✅ Left Column: Image & Buttons */}
          <div className="flex flex-col items-center">
            <img
              src={selectedTestimonial.image}
              alt={selectedTestimonial.name}
              className="w-80 h-auto max-h-80 object-contain rounded-2xl shadow-lg transition-all duration-300"
              loading="lazy"
            />

            {/* Testimonial Selection Buttons */}
            <div className="mt-4 flex gap-4">
              {testimonials.map((t) => (
                <Button
                  key={t.name}
                  variant={
                    selectedTestimonial.name === t.name ? "default" : "outline"
                  }
                  onClick={() => handleTestimonialChange(t)}
                  className="px-4 py-2 text-lg font-medium"
                >
                  {t.name}
                </Button>
              ))}
            </div>
          </div>

          {/* ✅ Right Column: Text & Star Rating */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800">
              Find out why we’re better.
            </h2>
            <p className="text-lg text-gray-600">{selectedTestimonial.quote}</p>

            <Button className="bg-green-500 hover:bg-green-600 px-6 py-3 text-lg font-semibold rounded-full shadow-md">
              See All Stories
            </Button>

            {/* Star Rating */}
            <div className="flex items-center gap-1 mt-3">
              {[...Array(4)].map((_, i) => (
                <Icons.Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <Icons.Star className="w-5 h-5 fill-yellow-400 text-yellow-400 opacity-70" />
              <span className="ml-2 text-lg font-semibold text-gray-700">
                Excellence 4.5 / 5
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
