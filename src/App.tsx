import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import FakeBar from './components/FakeBar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import ProductConstructor from './components/ProductConstructor';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FakeBar/>
      <Routes>
       <Route path='/Main' element = {<MainPage/>} />
       <Route path='/ProductConstructor' element = {<ProductConstructor />} />
       <Route path='/Gallery/:category' element = {<Gallery/>}/>
       <Route path='/ProductConstructor/product/:productID' element = {<ProductConstructor/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
