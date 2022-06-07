import './companiesMain.css';

import Header from '../Header/Header';
import CompaniesList from '../companiesList/companiesList';

import {ICompany} from '../../utils/interfaces';

function CompaniesMain({allCompanies, isVisible}: {allCompanies: ICompany[]; isVisible: boolean}) {

  return (
    <div className={`companiesMain ${isVisible ? 'companiesMain_hidden' : ''}`}>
        <Header />
        <CompaniesList allCompanies={allCompanies}/>
    </div>
  );
}

export default CompaniesMain;