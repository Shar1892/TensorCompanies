import "./companiesList.css";

import {ICompany} from '../../utils/interfaces';

import CompanyPreview from "../companyPreview/companyPreview";

function CompaniesList({
  allCompanies,
  openCard
}: {
  allCompanies: ICompany[];
  openCard: (inn: string) => void
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
      
        {allCompanies.map((item: {
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
      
    </main>
  );
}

export default CompaniesList;