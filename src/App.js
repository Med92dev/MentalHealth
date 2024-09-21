import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainContent from './main-interface/MainContent';
import Header from './main-interface/Header';
import Articles from './article/Articles';
import ListeDocters from './docters/ListDocters';
import Booking from './booking/Booking';
import Consultation from './consultation/Consultation';
import NewsFeed from './newsfeed/NewsFeed';
import Login from './register/Login';
import Register from './register/Register';

function App() {
  return (
    <>
          <Header /> {/* يجب أن يكون هنا */}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/doctors" element={<ListeDocters />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/newsFeed" element={<NewsFeed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
