import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Users, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import Header from "@/components/Header";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Features />
      <main className="flex-1">
        {/* Screenshots Section */}
        <section
          id="screenshots"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">Screenshots</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  See AppName in Action
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore how AppName looks and feels on your device. Beautiful
                  design meets powerful functionality.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 py-12 md:grid-cols-3">
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  width="300"
                  height="600"
                  alt="App screenshot 1"
                  className="rounded-2xl shadow-lg border-4 border-white dark:border-gray-800"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  width="300"
                  height="600"
                  alt="App screenshot 2"
                  className="rounded-2xl shadow-lg border-4 border-white dark:border-gray-800"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  width="300"
                  height="600"
                  alt="App screenshot 3"
                  className="rounded-2xl shadow-lg border-4 border-white dark:border-gray-800"
                />
              </div>
            </div>
          </div>
        </section>

        <Testimonial />
        <DownloadCTA />
        <Footer />
      </main>
    </div>
  );
}
