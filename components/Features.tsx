import { ArrowRight, Shield, Smartphone, Zap } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    title: "Lightning Fast Performance",
    description:
      "Experience blazing fast speeds with our optimized mobile app. Built with cutting-edge technology to deliver instant responses and smooth interactions.",
    image: "/features/1.png",
  },
  {
    title: "Advanced Security",
    description:
      "Your data is protected with enterprise-grade security. End-to-end encryption ensures your information stays private and secure at all times.",
    image: "/features/2.png",
  },
  {
    title: "Intuitive Design",
    description:
      "Navigate effortlessly with our beautifully crafted interface. Every interaction is designed to be natural, engaging, and delightfully simple.",
    image: "/features/3.png",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features Built for You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the next generation of mobile productivity with features
            designed to enhance your workflow.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-16`}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-3">
                  {index === 0 && <Zap className="h-8 w-8 text-blue-600" />}
                  {index === 1 && <Shield className="h-8 w-8 text-blue-600" />}
                  {index === 2 && (
                    <Smartphone className="h-8 w-8 text-blue-600" />
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <Button
                  variant="outline"
                  className="border-2 hover:bg-blue-50 hover:border-blue-600"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="relative w-full rounded-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
