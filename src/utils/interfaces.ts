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

export interface IBisinessCost {
  cost_competitors: {
    revenue: number;
    cost: number;
    inn: string;
  }[];
}

export interface IOwner {
  face_name: string;
  region: string;
  date_begin: string;
  inn: string;
  cost: number;
  share: number;
}

export interface IBranch {
  kpp: string;
  branch_name: string;
  address: string;
  state_code: number;
  branch_code: string;
  state_name: string;
}

export interface IContacts {
  phone_numbers: string[];
  sites: string[];
  emails: string[];
}

export interface ICourt {
  date: string;
  list_of_plaintiffs: string[];
  list_of_defendants: string[];
  category: string;
  number_case: string;
  case_name: string;
}

export interface IExecutive {
  date: string;
  case_name: string;
  status: string;
  cost: number;
}
export interface IPledge {
  agreement: {
    publish_date:string
  };
  category: string[];
  lessee_name: string;
  objects: {
    description: string;
  }[];
  type: string;
}

export interface IInspection {
  date_check: string;
  inspection_body_main: string;
  inspection_objective: string;
}