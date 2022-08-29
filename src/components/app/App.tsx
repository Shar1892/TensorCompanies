import {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import * as Api from '../../utils/APICompanies';
import {ICompany} from '../../utils/interfaces';

import CompaniesMain from '../companiesMain/companiesMain';
import Card from '../card/card';
//import Preloader from '../preloader/preloader';

function App() {

  const [allCompanies, setAllCompanies] = useState<ICompany[]>([]);
  const [isCardOpen, setIsCardOpen] = useState<boolean>(false);
  const [viewCompanies, setViewCompanies] = useState<ICompany[]>([]);

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
  });

  const [isLoadingCompanies, setIsLoadingCompanies] = useState<boolean>(true);

  useEffect(() => {
    Api.getCompniesList().then((data) => {
      console.log(data);
      setAllCompanies(data);
      setViewCompanies(data);
    }).finally(() => {
      setIsLoadingCompanies(false);
    })

  }, []);

  const openCard = (inn: string): void => {
    setIsCardOpen(true);
    const openedCompany = allCompanies.find((item) => {
      return item.inn === inn;
    });
    if (openedCompany) {
      setSelectCompany(openedCompany);
    } 
  }

  const closeCard = (): void => {
    setIsCardOpen(false);
  }

  const foundByNameAndINN = (query: string, companiesArr: ICompany[]): ICompany[] => {
    let foundCompanies: ICompany[] = [];
    let lowerQuery: string = query.toLocaleLowerCase();

    companiesArr.forEach((company: ICompany): void => {
      let lowerCompanyName = company.company_name.toLocaleLowerCase();

      if (~lowerCompanyName.indexOf(lowerQuery) || ~company.inn.indexOf(lowerQuery)) {
        foundCompanies.push(company);
      }
    })

    return foundCompanies;
  }

  const searchCompany = (query: string): void => {
    setViewCompanies(foundByNameAndINN(query, allCompanies));
  }

  const resetFoundedCompanies = (): void => {
    setViewCompanies(allCompanies);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
        <CompaniesMain
            companies={viewCompanies}
            isVisible={isCardOpen}
            openCard={openCard}
            isLoading={isLoadingCompanies}
            searchCompany={searchCompany}
            resetFoundedCompanies={resetFoundedCompanies}
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
