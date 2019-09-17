import React from 'react';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
