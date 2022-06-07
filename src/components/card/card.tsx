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

function Card({isVisible, companyData}: {isVisible: boolean, companyData: {
  inn: string;
  company_name: string;
  region: string;
  director_egrul_surname: string;
  director_egrul_name: string;
  director_egrul_patronymic: string;
  activity_kind: string;
  kpp: string;
}}) {

  return (
    <div className={`card ${isVisible ? '' : 'card_close'}`}>
      <CardHeader />

      <div className="card__main">
        <div className="card__content">
          <AboutCompany />
          <Owners />
          <Branches />
          <Contacts />
          <Courts />
          <Pladges />
          <Inspections />
          <Vacancies />
          <Requisites />
        </div>
        <CardMenu />
      </div>
    </div>
  );
}

export default Card;