import React from "react";
import { Button } from "./ui/button";
import { Apple, Play } from "lucide-react";

const DownloadCTA = () => {
  return (
    <section
      id="download"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Get NextGen App Today
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Available on iOS and Android. Start your journey now and join
          thousands of satisfied users!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Apple className="mr-2 h-6 w-6" />
            Download for iOS
          </Button>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Play className="mr-2 h-6 w-6" />
            Get it on Google Play
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
