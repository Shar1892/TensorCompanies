export interface ICompany {
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
}