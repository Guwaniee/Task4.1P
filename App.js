import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeaderImage from './components/Headerimage';
import ArtistTab from './components/Artist';
import Gallery from './components/Gallery';
import ArtGallery from './components/ArtGallery';
import Footer from './components/Footer';

// Import other components here if needed

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderImage />
      <h2 className="section-title">Famous Artists</h2>
      <ArtistTab />
      <h2 className="section-title">Art Gallery</h2>
      <Gallery /> s
      <ArtGallery />
      <Footer/>
    </div>
  );
}

export default App;
