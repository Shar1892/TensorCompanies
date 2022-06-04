import {useEffect, useState} from 'react';

import './App.css';

import * as Api from '../../utils/APICompanies';

import {ICompany} from '../../utils/interfaces';

import Header from '../Header/Header';
import CompaniesList from '../companiesList/companiesList';

function App() {

  const [companies, setCompanies] = useState<ICompany[]>([]);

  useEffect(() => {
    Api.getCompniesList().then((data) => {
      console.log(data);
      setCompanies(data);
    })
  }, []);

  return (
    <div className="App">
      <div className='App__context'>
        <Header />
        <CompaniesList allCompanies={companies}/>
      </div>
    </div>
  );
}

export default App;
