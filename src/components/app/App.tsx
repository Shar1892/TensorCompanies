import {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import * as Api from '../../utils/APICompanies';
import {ICompany} from '../../utils/interfaces';

import CompaniesMain from '../companiesMain/companiesMain';
import Card from '../card/card';

function App() {

  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [isCardOpen, setIsCardOpen] = useState<boolean>(false);

  const [selectCompany, setSelectCompany] = useState<ICompany>({
    inn: '',
    company_name: '',
    region: '',
    director_egrul_surname: '',
    director_egrul_name: '',
    director_egrul_patronymic: '',
    director_position: '',
    activity_kind: '',
    kpp: '',
    company_full_name: '',
    main_okved_name: '',
    main_okved: '',
    okved: '',
    amount_of_employees: {
      amount_by_nalogru: 1,
      amount_difference: 1,
      average_salary_by_nalogru: 1,
      average_salary_difference: 1,
    },
    registration_date: '',
    taxation_form_name: [''],
    about_company: '',
    ogrn: '',
    reg_number_pf: '',
    okpo: '',
    reg_number_fss: '',
    oktmo: '',
  })

  useEffect(() => {
    Api.getCompniesList().then((data) => {
      console.log(data);
      setCompanies(data);
    })
  }, []);

  const openCard = (inn: string): void => {
    setIsCardOpen(true);
    const openedCompany = companies.find((item) => {
      return item.inn === inn;
    });
    if (openedCompany) {
      setSelectCompany(openedCompany);
    } 
  }

  const closeCard = (): void => {
    setIsCardOpen(false);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <CompaniesMain
            allCompanies={companies}
            isVisible={isCardOpen}
            openCard={openCard}
          />
        </Route>
          <Card
            isVisible={isCardOpen}
            companyData={selectCompany}
            closeCard={closeCard}
          />
      </Switch>
    </div>
  );
}

export default App;
