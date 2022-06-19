import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import ProductConstructor from './components/ProductConstructor';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <MainPage/> */}
      <ProductConstructor/>
      {/* <Gallery/> */}
      <Footer/>
    </div>
  );
}

export default App;
