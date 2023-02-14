import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import MyProfile from './pages/MyProfile';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route caseSensitive path="myprofile" element={<MyProfile />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
