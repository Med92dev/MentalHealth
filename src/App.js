// src/App.js
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import MainContent from './main-interface/MainContent';
import Header from './main-interface/Header';
import Articles from './article/Articles';
import ListeDocters from "./docters/ListDocters.js";
import Booking from "./booking/Booking.js";
import Consultation from './consultation/Consultation.js';
import NewsFeed from './newsfeed/NewsFeed.js';
import Login from './register/Login.js';
import Register from './register/Register.js';
// import { ArticlesProvider } from './article/ArticlesContext.js'; // استيراد المزود

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/docters" element={<ListeDocters />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/newsFeed" element={<NewsFeed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      </>
    
  );
}

export default App;

