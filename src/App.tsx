import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import FakeBar from './components/FakeBar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import MainPage from './components/MainPage';
import Message from './components/Message';
import MessagesList from './components/MessagesList';
import MessagesPage from './components/MessagesPage';
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
       <Route path='/Messages' element = {<MessagesPage/>}>
            <Route index element = {<MessagesList/>} />
            <Route path=':messageID' element = {<Message/>} />
       </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
