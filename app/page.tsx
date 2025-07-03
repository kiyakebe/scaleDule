import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Users, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <Smartphone className="h-8 w-8 text-primary" />
          <span className="ml-2 text-xl font-bold">scaleDule</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#screenshots"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Screenshots
          </Link>
          <Link
            href="#download"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Download
          </Link>
        </nav>
      </header>
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

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">Testimonials</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Users Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied users who have transformed their
                  workflow with AppName.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg font-medium mb-4">
                    "This app has transformed the way I manage my daily tasks!
                    The interface is intuitive and the features are exactly what
                    I needed."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">App User</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg font-medium mb-4">
                    "Incredibly intuitive and packed with features I love. It's
                    become an essential part of my daily routine."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Mike Chen</p>
                      <p className="text-sm text-muted-foreground">App User</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <DownloadCTA />
        <Footer />
      </main>
    </div>
  );
}
