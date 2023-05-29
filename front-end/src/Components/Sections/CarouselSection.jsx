/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    { id: 1, image: "../src/assets/1.jpg" },
    { id: 2, image: "../src/assets/2.jpg" },
    { id: 3, image: "../src/assets/3.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`w-full transition-opacity duration-500 absolute ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={item.image}
              alt={`Carousel Item ${item.id}`}
              className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-128"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-2">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
