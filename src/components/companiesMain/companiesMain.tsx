import './companiesMain.css';

import Header from '../Header/Header';
import CompaniesList from '../companiesList/companiesList';

import {ICompany} from '../../utils/interfaces';

function CompaniesMain({
  allCompanies,
  isVisible,
  openCard,
  isLoading,
}: {
  allCompanies: ICompany[],
  isVisible: boolean,
  openCard: (inn: string) => void,
  isLoading: boolean,
}) {

  return (
    <div className="companiesMain">
        <Header />
        <CompaniesList allCompanies={allCompanies} openCard={openCard} isLoading={isLoading}/>
    </div>
  );
}

export default CompaniesMain;

// <div className={`companiesMain ${isVisible ? 'companiesMain_hidden' : ''}`}>