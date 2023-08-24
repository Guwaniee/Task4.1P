import React from 'react';
import './ArtGallery.css'; // Import the CSS file

function ArtGallery() {
  const artworks = [
    {
      image: '/images/artwork1.jpeg',
      title: 'Sunset over Mountains',
      price: 200,
      material: 'Oil on Canvas',
    },
    {
      image: '/images/artwork2.jpeg',
      title: 'Cityscape at Night',
      price: 150,
      material: 'Watercolor on Paper',
    },
    {
      image: '/images/artwork1.jpeg',
      title: 'Abstract Art',
      price: 180,
      material: 'Acrylic on Canvas',
    },
    {
      image: '/images/artwork4.jpeg',
      title: 'Flower Garden',
      price: 250,
      material: 'Oil on Canvas',
    },
    {
      image: '/images/artwork5.jpeg',
      title: 'Portrait',
      price: 120,
      material: 'Pencil on Paper',
    },
    {
      image: '/images/artwork4.jpeg',
      title: 'Ocean View',
      price: 220,
      material: 'Watercolor on Paper',
    },
  ];

  return (
    <div className="art-gallery">
      <h2 className="section-title">Artworks for Sale</h2>
      <div className="artwork-list">
        <div className="artwork-row">
          {artworks.slice(0, 3).map((artwork, index) => (
            <div key={index} className="artwork-item">
              <img src={artwork.image} alt={artwork.title} />
              <h3>{artwork.title}</h3>
              <p>Price: ${artwork.price}</p>
              <p>Material: {artwork.material}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="artwork-row">
          {artworks.slice(3).map((artwork, index) => (
            <div key={index} className="artwork-item">
              <img src={artwork.image} alt={artwork.title} />
              <h3>{artwork.title}</h3>
              <p>Price: ${artwork.price}</p>
              <p>Material: {artwork.material}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtGallery;
