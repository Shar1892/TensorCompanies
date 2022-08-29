import './companiesMain.css';

import Header from '../Header/Header';
import CompaniesList from '../companiesList/companiesList';

import {ICompany} from '../../utils/interfaces';

function CompaniesMain({
  companies,
  isVisible,
  openCard,
  isLoading,
  searchCompany,
  resetFoundedCompanies,
  searchValue,
}: {
  companies: ICompany[],
  isVisible: boolean,
  openCard: (inn: string) => void,
  isLoading: boolean,
  searchCompany: (query: string) => void,
  resetFoundedCompanies: () => void,
  searchValue: string,
}) {

  return (
    <div className="companiesMain">
        <Header 
          searchCompany={searchCompany}
          resetFoundedCompanies={resetFoundedCompanies}
          searchValue={searchValue}
        />
        <CompaniesList companies={companies} openCard={openCard} isLoading={isLoading}/>
    </div>
  );
}

export default CompaniesMain;

// <div className={`companiesMain ${isVisible ? 'companiesMain_hidden' : ''}`}>