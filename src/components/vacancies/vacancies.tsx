import { useEffect, useState } from 'react';
import { getVacancies } from '../../utils/APICompanies';
import { IVacancy } from '../../utils/interfaces'
import { filtrArrToLenghth } from '../../utils/utils';
import NoData from '../noData/noData';

import './vacancies.css';

function Vacancies(
  {
    currentSection,
    inn,
  }:
  {
    currentSection: string;
    inn: string;
  }
) {

  const [allVacancies, setAllVacancies] = useState<IVacancy[]>([]);
  const [displayedVacancies, setDisplayedVacancies] = useState<IVacancy[]>([]);

  useEffect(() => {
    if (currentSection === 'vacancies') {
      getVacancies(inn).then((data) => {
        console.log(data[0]);
        setAllVacancies(data[0]);
        setDisplayedVacancies(filtrArrToLenghth(data[0], 10));
      });
    }
  }, [inn, currentSection]);

  const formatVacanciesSource = (sourseArr: string[]): string => {
    if (!sourseArr.length) {
      return '';
    } else {
      const ourSite = sourseArr.find((sourse) => {
        return sourse === 'Наш сайт' || sourse === 'online.sbis.ru'
      });

      if (ourSite) {
        return 'Наш сайт';
      } else {
        return sourseArr[0];
      }
    }
  }

  const formatSalary = (salaryFrom: number, salaryTo: number): string => {
    if (!salaryFrom && !salaryTo) {
      return 'Не указано';
    } else if (!salaryFrom) {
      return `до ${salaryTo} ₽`;
    } else if (!salaryTo) {
      return `от ${salaryFrom} ₽`;
    } else if (salaryFrom === salaryTo) {
      return `${salaryFrom} ₽`;
    } else {
      return `${salaryFrom}-${salaryTo} ₽`;
    }
  }

  const showMoreVacancies = (): void => {
    setDisplayedVacancies(filtrArrToLenghth(allVacancies, (allVacancies.length + 10)));
  }

  return (
    <section className="vacancies">
      <h2 className="vacancies__title">ВАКАНСИИ</h2>
      {
        allVacancies.length ?
        <>
          <div className="vacancies__list">
            {displayedVacancies.map((vacancy: IVacancy) => (
              <div className="vacancies__vacancy-container" key={vacancy.id}>
                <div className="vacancies__vacancy-discription-container">
                  <div className="vacancies__vacancy-info-container">
                    <p className="vacancies__vacancy-title">{vacancy.title}</p>
                    <p className="vacancies__vacancy-sity">{vacancy.kladr_data[0]}</p>
                  </div>
                  <p className="vacancies__vacancy-discription">{vacancy.description}</p>
                </div>
                <div className="vacancies__vacancy-salary-container">
                  <p className="vacancies__vacancy-salary">{formatSalary(vacancy.salary_from, vacancy.salary_to)}</p>
                  <p className="vacancies__vacancy-source">{formatVacanciesSource(vacancy.sources_name)}</p>
                </div>
              </div>
            ))}
          </div>
          {
            (allVacancies.length > displayedVacancies.length) &&
            <button className="vacancies__more-button" onClick={showMoreVacancies}>Ещё</button>
          }
        </> :
        <NoData />
      }
    </section>
  );
}

export default Vacancies;