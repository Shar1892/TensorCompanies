import React from 'react';
import './App.css';
import Header from '../Header/Header';
import CompaniesList from '../companiesList/companiesList';

function App() {
  return (
    <div className="App">
      <div className='App__context'>
        <Header />
        <CompaniesList />
      </div>
    </div>
  );
}

export default App;
