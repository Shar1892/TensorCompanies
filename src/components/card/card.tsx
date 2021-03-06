import {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom'

import CardHeader from "../cardHeader/cardHeader";
import AboutCompany from "../aboutCompany/aboutCompany";
import Owners from "../owners/owners";
import Branches from "../branches/branches";
import Contacts from "../contacts/contacts";
import Courts from "../courts/courts";
import Pledges from "../pledges/pledges";
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
    main_okved: string;
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
    ogrn: string;
    reg_number_pf: string;
    okpo: string;
    reg_number_fss: string;
    oktmo: string;
  };
  closeCard: () => void
}) {

  const [currentSection, setCurrentSection] = useState<string>('aboutCompany');

  useEffect(() => {
    if (companyData.inn) {
      setCurrentSection('aboutCompany');
    }
  }, [companyData.inn]);

  const handleSetSection = (nameSection: string): void => {
    console.log(nameSection);
    setCurrentSection(nameSection);
  }

  const setStartSection = (): void => {
    setCurrentSection('aboutCompany');
  }

  return (
    <div className={`card ${isVisible ? '' : 'card_close'}`}>
      <CardHeader 
        closeCard={closeCard}
        dropSection={setStartSection}
        inn={companyData.inn}
        region={companyData.region}
        kpp={companyData.kpp}
        name={companyData.company_name}
      />
      <div className="card__main">
        <div className="card__content">
          <Switch>
            <Route exact path="/card/about_company">
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
                inn={companyData.inn}
                currentSection={currentSection}
              />
            </Route>
            <Route path="/card/owners">
              <Owners 
                currentSection={currentSection}
                inn={companyData.inn}
              />
            </Route>
            <Route path="/card/branches">
              <Branches
                currentSection={currentSection}
                inn={companyData.inn}
              />
            </Route>
            <Route path="/card/contacts">
              <Contacts
                currentSection={currentSection}
                inn={companyData.inn}
              />
            </Route>
            <Route path="/card/courts">
              <Courts
                currentSection={currentSection}
                inn={companyData.inn}
              />
            </Route>
            <Route path="/card/pledges">
              <Pledges
                currentSection={currentSection}
                inn={companyData.inn}
              />
            </Route>
            <Route path="/card/inspections">
              <Inspections
                currentSection={currentSection}
                inn={companyData.inn}
              />
            </Route>
            <Route path="/card/vacancies">
              <Vacancies
                currentSection={currentSection}
                inn={companyData.inn}
              />
            </Route>
            <Route path="/card/requisites">
              <Requisites
                currentSection={currentSection}
                fullName={companyData.company_full_name}
                ogrn={companyData.ogrn}
                regNumberPf={companyData.reg_number_pf}
                okpo={companyData.okpo}
                regNumberFss={companyData.reg_number_fss}
                oktmo={companyData.oktmo}
                mainOkvedName={companyData.main_okved_name}
                mainOkved={companyData.main_okved}
                okveds={companyData.okved}
                registrationDate={companyData.registration_date}
              />
            </Route>
          </Switch>
        </div>
        <CardMenu handleSetSection={handleSetSection} currentSection={currentSection}/>
      </div>
    </div>
  );
}

export default Card;
