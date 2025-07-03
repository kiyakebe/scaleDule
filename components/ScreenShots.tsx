import React from "react";

const screenshots = ["/features/1.png", "/features/2.png", "/features/3.png"];

const ScreenShots = () => {
  return (
    <section
      id="screenshots"
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See LaunchApp in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore how LaunchApp looks and feels on your device with our
            beautiful, intuitive interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img
                src={screenshot}
                alt={`App screenshot ${index + 1}`}
                className="relative w-full aspect-square object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenShots;
