import CardHeader from "../cardHeader/cardHeader";
import AboutCompany from "../aboutCompany/aboutCompany";
import Owners from "../owners/owners";
import Branches from "../branches/branches";
import Contacts from "../contacts/contacts";
import Courts from "../courts/courts";
import Pladges from "../pladges/pladges";
import Inspections from "../inspections/inspections";
import Vacancies from "../vacancies/vacancies";
import Requisites from "../requisites/requisites";
import CardMenu from "../cardMenu/cardMenu";

import './card.css';

function Card({
  isVisible,
  companyData,
  closeCard
}: {
  isVisible: boolean;
  companyData: {
    inn: string;
    company_name: string;
    region: string;
    director_egrul_surname: string;
    director_egrul_name: string;
    director_egrul_patronymic: string;
    director_position: string;
    activity_kind: string;
    kpp: string;
    company_full_name: string;
    main_okved_name: string;
    okved: string;
    amount_of_employees: {
      amount_by_nalogru: number;
      amount_difference: number;
      average_salary_by_nalogru: number;
      average_salary_difference: number;
    };
    registration_date: string;
    taxation_form_name: Array<string>;
    about_company: string;
  };
  closeCard: () => void
}) {

  return (
    <div className={`card ${isVisible ? '' : 'card_close'}`}>
      <CardHeader 
        closeCard={closeCard}
        inn={companyData.inn}
        region={companyData.region}
        kpp={companyData.kpp}
        name={companyData.company_name}
      />
    <div className="card__main">
        <div className="card__content">
          <AboutCompany
            fullName={companyData.company_full_name}
            mainOkved={companyData.main_okved_name}
            okveds={companyData.okved}
            directorName={companyData.director_egrul_name}
            directorSurname={companyData.director_egrul_surname}
            directorPatronymic={companyData.director_egrul_patronymic}
            directorPosition={companyData.director_position}
            amountOfEmployees={companyData.amount_of_employees}
            registrationDate={companyData.registration_date}
            taxationForm={companyData.taxation_form_name}
            aboutCompanyText={companyData.about_company}
          />
        </div>
        <CardMenu />
      </div>
    </div>
  );
}

export default Card;
