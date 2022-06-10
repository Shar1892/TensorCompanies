import './aboutCompany.css';

import {changeRecordOfDifference, changeRecordOfDate} from '../../utils/utils';

function AboutCompany({
  fullName,
  mainOkved,
  okveds,
  directorName,
  directorSurname,
  directorPatronymic,
  directorPosition,
  amountOfEmployees,
  registrationDate,
  taxationForm,
  aboutCompanyText,
}: {
  fullName: string;
  mainOkved: string;
  okveds: string;
  directorName: string;
  directorSurname: string;
  directorPatronymic: string;
  directorPosition: string;
  amountOfEmployees: {
    amount_by_nalogru: number;
    amount_difference: number;
    average_salary_by_nalogru: number;
    average_salary_difference: number;
  };
  registrationDate: string;
  taxationForm: Array<string>;
  aboutCompanyText: string;
}) {

  const okvedsArr: Array<string> = okveds.split(',');

  return (
    <section className="about-company">
      <div className="about-company__info-container">
        <div className="about-company__info">
          <div className="about-company__name-container">
            <h2 className="about-company__full-name">{fullName}</h2>
          </div>
          <div className="about-company__okved-info">
            <p className="about-company__simple-text">{mainOkved}</p>            
            <p className="about-company__link-text about-company__link-text_small">{`Ещё ${okvedsArr.length - 1} видов деятельности`}</p>
          </div>
          <div className="about-company__director-info">
            <p className="about-company__dedicated-text">{`${directorSurname} ${directorName} ${directorPatronymic}`}</p>
            <p className="about-company__simple-text">{directorPosition}</p>
          </div>
          {
            amountOfEmployees.amount_by_nalogru ?
            <div className="about-company__employees-info">
              <p className="about-company__employees-counter">{amountOfEmployees.amount_by_nalogru}</p>
              <p className="about-company__simple-text">сотрудников</p>
              <p className="about-company__employees-difference">{changeRecordOfDifference(amountOfEmployees.amount_difference)}</p>
              {
                amountOfEmployees.average_salary_by_nalogru ?
                <>
                  <p className="about-company__salary-counter">{Math.round(amountOfEmployees.average_salary_by_nalogru)}</p>
                  <p className="about-company__simple-text">средняя з/п</p>
                  <p className="about-company__salary-difference">{changeRecordOfDifference(Math.round(amountOfEmployees.average_salary_difference))}</p>
                </> :
                <></>
              }
            </div> :
            <></>
          }
        </div>
        <div className="about-company__registration-info">
          <p className="about-company__link-text about-company__link-text_normal">{`Зарегистрирован ${changeRecordOfDate(registrationDate)}`}</p>
          <p className="about-company__link-text about-company__link-text_normal">{taxationForm[0]}</p>
        </div>
      </div>
      <div className="about-company__financialBlock">
        <p className="about-company__dedicated-text">Выручка: 500 млн</p>
        <p className="about-company__dedicated-text">Стоимость: 500 млн</p>
      </div>
      <div className="about-company__about-container">
        <h3 className="about-company__dedicated-text">О компании</h3>
          <div className="about-company__text-container">
            {
              aboutCompanyText ?
              <p className="about-company__long-text">{aboutCompanyText}</p>:
              <p className="about-company__long-text">Нет данных</p>
            }
          </div>
      </div>
    </section>
  );
}

export default AboutCompany;
