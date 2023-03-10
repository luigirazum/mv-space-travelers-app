import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound';
import MyProfile from './pages/MyProfile';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Header />
    <main className="container">
      <Routes>
        <Route index element={<Rockets />} />
        <Route caseSensitive path="missions" element={<Missions />} />
        <Route caseSensitive path="myprofile" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
