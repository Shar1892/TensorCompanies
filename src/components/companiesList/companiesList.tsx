import "./companiesList.css";

import {ICompany} from '../../utils/interfaces';

import CompanyPreview from "../companyPreview/companyPreview";
import Preloader from '../preloader/preloader';
import NoResult from "../noResult/noResult";

function CompaniesList({
  companies,
  openCard,
  isLoading,
}: {
  companies: ICompany[],
  openCard: (inn: string) => void,
  isLoading: boolean,
}) {
  return (
    <main className="companiesList">
      <div className="companiesList__header">
        <p className="companiesList__description-title">Название</p>
        <div className="companiesList__requisites-container">
          <p className="companiesList__requisites-title">ИНН</p>
          <p className="companiesList__requisites-title">КПП</p>
        </div>
      </div>
        {
          isLoading ?
          <Preloader /> :
          <div className="companiesList__container">
            {
              companies.length ?
              <>
              {companies.map((item: {
                inn: string;
                company_name: string;
                region: string;
                director_egrul_surname: string;
                director_egrul_name: string;
                director_egrul_patronymic: string;
                activity_kind: string;
                kpp: string;
              }) => (
                <CompanyPreview companyData={item} key={item.inn} openCard={openCard}/>
              ))}
            </> :
              <NoResult />
            }
          </div>
        }
      
    </main>
  );
}

export default CompaniesList;