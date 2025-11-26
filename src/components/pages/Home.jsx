import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Array of bodyguard/security personnel background images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&q=80', // Security guard in suit
    'https://images.unsplash.com/photo-1590692995776-8f37ae5323e5?w=1920&q=80', // Security personnel
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80', // Professional security team
    'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1920&q=80', // Bodyguard watching
  ];

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Trigger animations on page load
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <style>
        {`
          @keyframes slideInFromRight {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInFromLeft {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-slide-right {
            animation: slideInFromRight 1s ease-out forwards;
          }

          .animate-slide-left {
            animation: slideInFromLeft 1s ease-out forwards;
          }

          .animate-fade {
            animation: fadeIn 1.5s ease-out forwards;
          }

          .delay-200 {
            animation-delay: 0.2s;
          }

          .delay-400 {
            animation-delay: 0.4s;
          }

          .delay-600 {
            animation-delay: 0.6s;
          }
        `}
      </style>

      {/* Background Images with Crossfade */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
          }}
        ></div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-48 pb-32 lg:pt-56 lg:pb-40 md:pt-44 md:pb-24">
        <div className="max-w-2xl">
          {/* Tagline - Slide from Left */}
          <div 
            className={`flex items-center gap-3 mb-6 ${
              isLoaded ? 'animate-slide-left' : 'opacity-0'
            }`}
          >
            <div className="h-0.5 w-16 bg-amber-500"></div>
            <span className="text-amber-500 italic text-lg">Your Safety, Our Priority</span>
          </div>

          {/* Main Heading - Slide from Right */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight ${
              isLoaded ? 'animate-slide-right delay-200' : 'opacity-0'
            }`}
          >
            PROFESSIONAL SECURITY<br />& FACILITY SOLUTIONS
          </h1>

          {/* Description - Slide from Left */}
          <p 
            className={`text-gray-300 text-base md:text-lg mb-8 leading-relaxed ${
              isLoaded ? 'animate-slide-left delay-400' : 'opacity-0'
            }`}
          >
            Cadman Security Service delivers comprehensive security solutions, facility management, 
            and maintenance services tailored to your needs. With highly trained personnel and 
            cutting-edge technology, we ensure the safety and efficiency of your premises 24/7.
          </p>

          {/* CTA Buttons - Fade In */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 ${
              isLoaded ? 'animate-fade delay-600' : 'opacity-0'
            }`}
          >
            <button className="px-8 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg">
              GET STARTED
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay on Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-black/40 to-transparent hidden lg:block pointer-events-none"></div>
    </div>
  );
};

export default Home;