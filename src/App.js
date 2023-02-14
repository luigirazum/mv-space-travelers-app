import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route index element={<Rockets />} />
        <Route caseSensitive path="myprofile" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
