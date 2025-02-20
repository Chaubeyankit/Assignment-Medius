import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Icons } from "@/icon/icons";

export function Start() {
  return (
    <div className="w-full">
      {/* Hero Section - Chatbot Style */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-green-500 to-green-700 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Hi, I&apos;m Betsy!</h1>
        <p className="mt-4 text-lg md:text-2xl max-w-lg">
          What can I help you with?
        </p>

        {/* Options: Buy, Refinance, Get Cash */}
        <div className="mt-10 grid md:grid-cols-3 gap-6 w-full max-w-4xl">
          {[
            { title: "Buying a Home", icon: Icons.Home, color: "bg-blue-500" },
            {
              title: "Refinance My Mortgage",
              icon: Icons.RefreshCw,
              color: "bg-yellow-500",
            },
            {
              title: "Get Cash from My Home",
              icon: Icons.DollarSign,
              color: "bg-red-500",
            },
          ].map((option, index) => (
            <Card
              key={index}
              className="cursor-pointer transition-transform hover:scale-105"
            >
              <CardContent className="flex flex-col items-center p-6">
                <option.icon
                  className={`${option.color} text-white p-3 rounded-full`}
                  size={40}
                />
                <h2 className="mt-4 text-xl font-semibold">{option.title}</h2>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-6 text-4xl font-bold text-gray-900">
            <div>
              <span className="text-green-600">$100B</span>
              <p className="text-lg text-gray-600">
                home loans funded entirely online
              </p>
            </div>
            <div>
              <span className="text-blue-600">400K</span>
              <p className="text-lg text-gray-600">
                Customers who chose a Better Mortgage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unlock Benefits Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">
            After a few questions, you&apos;ll unlock:
          </h2>
          <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
            {[
              "Custom mortgage rates",
              "Exclusive offers",
              "A personalized dashboard",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-gray-100 px-6 py-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <Icons.CheckCircle className="text-green-600" size={30} />
                <p className="text-lg font-semibold">{benefit}</p>
              </motion.div>
            ))}
          </div>
          <Button className="mt-8 bg-green-600 text-white px-6 py-3 text-lg hover:bg-green-700">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}
