import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';
import React,{ createContext, useState } from 'react';

export const categoryContext = createContext();

function App() {
  const [category, setCategory] = useState('laptop')
  return (
    <div className="App">
      <header className="App-header">
        <categoryContext.Provider value={[category, setCategory]}>
            <Header></Header>
            <Home></Home>
            <Shipment></Shipment>
        </categoryContext.Provider>
      </header>
    </div>
  );
}

export default App;
