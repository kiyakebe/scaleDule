import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

const Hero = () => {
  return (
    <section className="relative py-12 md:py-24  px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="space-y-6 lg:space-y-8 flex flex-col justify-center">
            <Badge variant="secondary" className="w-fit">
              🚀 Now Available
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Launch Your Future with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                scaleDule App
              </span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Discover the ultimate productivity experience. Fast, intuitive,
              and built for you. Transform the way you work and connect with our
              revolutionary mobile platform.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-gray-300 hover:border-blue-600 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center relative">
            <Image
              src="/hero.png?height=900&width=900"
              width="900"
              height="900"
              alt="Mobile app screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
