// import { useState } from 'react';
import './App.css';
import { CardList } from './Components/CardList/CardList.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import { Header } from './Components/Header/Header.jsx';
import data from './data/data.json';

function App() {
  return (
    <div className='App'>
      <Header />
      <CardList cards={data} />
      <Footer />
    </div>
  );
}

export default App;
