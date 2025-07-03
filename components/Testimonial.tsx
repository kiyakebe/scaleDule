import React from "react";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote:
            "This app has transformed the way I manage my daily tasks! The interface is incredibly intuitive and the performance is outstanding.",
        author: "Sarah Johnson",
        role: "Product Manager",
    },
    {
        quote:
            "Incredibly powerful yet simple to use. The security features give me peace of mind while the speed keeps me productive.",
        author: "Michael Chen",
        role: "Software Developer",
    },
    {
        quote:
            "LaunchApp has been a game-changer for our team. Collaboration has never been easier, and the support team is fantastic!",
        author: "Emily Davis",
        role: "Team Lead",
    },
];

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied users who love LaunchApp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 hover:border-blue-600 transition-colors duration-300 hover:shadow-xl"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
