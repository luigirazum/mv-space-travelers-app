import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <p>Content here.</p>
    </main>
  </BrowserRouter>
);

export default App;
