import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

const Hero = () => {
  return (
    <section className="relative py-12 md:py-24 lg:py-32 xl:py-48 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="">
            <Badge variant="secondary" className="w-fit">
              🚀 Now Available
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Launch Your Future with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                NextGen App
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
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <Image
                src="/placeholder.svg?height=600&width=300"
                width="300"
                height="600"
                alt="Mobile app screenshot"
                className="relative rounded-3xl shadow-2xl border-8 border-gray-200 dark:border-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
