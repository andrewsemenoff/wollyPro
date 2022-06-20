import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import ProductConstructor from './components/ProductConstructor';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
       <Route path='/Main' element = {<MainPage/>} />
       <Route path='/ProductConstructor' element = {<ProductConstructor />} />
       <Route path='/Gallery/:category' element = {<Gallery/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
