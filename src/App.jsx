import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import HeroImage from './Components/HeroImage/HeroImage';
import ArtWorklists from './Components/ArtWorklists/ArtWorklists';
import Features from './Components/Features/Features';
import ProductShowcase from './Components/ProductShowcase.jsx/ProductShowcase.jsx';
import Categories from './Components/Categories/Categories';
import { bestSellers,newArrivals } from './data/data.js';
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <ArtWorklists />
      <Features />
      <ProductShowcase data={bestSellers}/>
      <ProductShowcase data={newArrivals}/>
      <Categories />
    </div>
  );
}

export default App
