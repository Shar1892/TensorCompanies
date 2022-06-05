import './companiesMain.css';

import Header from '../Header/Header';
import CompaniesList from '../companiesList/companiesList';

import {ICompany} from '../../utils/interfaces';

function CompaniesMain({allCompanies}: {allCompanies: ICompany[]}) {

  return (
    <div className="companiesMain">
        <Header />
        <CompaniesList allCompanies={allCompanies}/>
    </div>
  );
}

export default CompaniesMain;