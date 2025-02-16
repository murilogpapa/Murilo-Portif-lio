import React, { useState, useEffect } from 'react';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const images = [
  './src/assets/C-1.png',
  './src/assets/psd-1.png',
  './src/assets/python-1.png',
  './src/assets/tailwind-1.png',
  './src/assets/html-1.png',
  './src/assets/css-1.png',
  './src/assets/js-1.png',
  './src/assets/figma-1.png',
  './src/assets/git-1.png',
  './src/assets/C-1.png',
  './src/assets/psd-1.png',
  './src/assets/python-1.png',
  './src/assets/tailwind-1.png',
  './src/assets/html-1.png',
  './src/assets/css-1.png',
  './src/assets/js-1.png',
  './src/assets/figma-1.png',
  './src/assets/git-1.png',
  // Add more images as needed
];

const Carrosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (currentIndex === images.length) {
          setCurrentIndex(0);
        } else if (currentIndex === -1) {
          setCurrentIndex(images.length - 1);
        }
      }, 500); // Match the duration of the CSS transition
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, currentIndex]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10 overflow-hidden">
      <div
        className={`flex transition-transform duration-500 ease-in-out ${isTransitioning ? '' : 'transition-none'}`}
        style={{ transform: `translateX(-${(currentIndex % images.length) * 25.8}%)`,gap: '2rem' }}
      >
        {images.concat(images).map((image, index) => (
          <div key={index} className="w-2/9 p-2 flex-shrink-0">
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-4xl" />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 text-2xl left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 text-2xl right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Carrosel;