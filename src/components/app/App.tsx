import {useEffect, useState} from 'react';

import './App.css';

import * as Api from '../../utils/APICompanies';
import {ICompany} from '../../utils/interfaces';

import CompaniesMain from '../companiesMain/companiesMain';

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
      <CompaniesMain allCompanies={companies}/>
    </div>
  );
}

export default App;
