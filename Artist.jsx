import React from 'react';
import './Artist.css'; 
const famousArtists = [
  {
    name: 'Leonardo da Vinci',
    description: 'Italian Renaissance artist known for his masterpieces...',
    image: '/images/artist1.jpeg',
  },
  {
    name: 'Michelangelo',
    description: 'Renowned sculptor, painter, and architect of the High Renaissance...',
    image: '/images/artist2.jpeg',
  },
  {
    name: 'Pablo Picasso',
    description: 'Spanish painter, sculptor, and one of the most influential artists...',
    image: '/images/artist4.jpeg',
  },
];

const Artist = () => { 
  return (
    <div className="artists-tabs">
      {famousArtists.map((artist, index) => (
        <div key={index} className="artist-tab">
          <img src={artist.image} alt={artist.name} />
          <h3>{artist.name}</h3>
          <p>{artist.description}</p>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Artist; 