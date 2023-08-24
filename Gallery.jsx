import React, { useState, useEffect } from 'react';

const images = [
  '/images/art3.jpeg',
  '/images/art2.jpeg',
  '/images/art4.jpeg',
  '/images/art6.jpeg',
  '/images/art5.jpeg',

];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 3 seconds (adjust as needed)

    return () => {
      clearInterval(slideshowInterval);
    };
  }, []); // The empty dependency array ensures the effect runs once on mount

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-gallery">
      <div className="gallery-image">
        <img src={images[currentIndex]} alt={`Artwork ${currentIndex + 1}`} />
      </div>
      <div className="gallery-controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
      <p className="gallery-description">
      Welcome to our art gallery, a virtual haven for art enthusiasts and collectors alike. Our collection showcases a curated selection of masterpieces by some of the world's most renowned artists, including the visionary Leonardo da Vinci, the awe-inspiring Michelangelo, and the groundbreaking Pablo Picasso. Each artwork in our gallery embodies the essence of creativity, passion, and artistic genius. Explore our diverse range of paintings, sculptures, and artworks, each telling a unique story and leaving an indelible mark on the world of art. Whether you're a seasoned collector or a budding art enthusiast, we invite you to immerse yourself in the beauty, history, and emotion that these artworks evoke. Find your perfect masterpiece and add a touch of artistic brilliance to your space today.
      </p>
    </div>
  );
};

export default Gallery;