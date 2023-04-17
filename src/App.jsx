// import { useState } from 'react';
import './App.css';
import { CardList } from './Components/CardList/CardList.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import { Header } from './Components/Header/Header.jsx';

function App() {
  return (
    <div className='App'>
      <Header />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
