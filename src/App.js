import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import MyProfile from './pages/MyProfile';
import NotFound from './pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route caseSensitive path="myprofile" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
