import {useEffect, useState} from 'react';

import './courts.css';

import { getCourts, getExecutive } from '../../utils/APICompanies';
import { ICourt, iExecutive } from '../../utils/interfaces';
import { filtrArrToLenghth, changeRecordOfDate } from '../../utils/utils';

import NoData from '../noData/noData';

function Courts(
  {
    currentSection,
    inn,
  }:
  {
    currentSection: string;
    inn: string;
  }
) {

  const [allCourts, setAllCourts] = useState<ICourt[]>([]);
  const [allExecutives, setAllExecutives] = useState<iExecutive[]>([]);

  const [displayedCourts, setDisplayedCourts] = useState<ICourt[]>([]);
  const [displayedExecutives, setDisplayedExecutives] = useState<iExecutive[]>([]);

  useEffect(() => {
    if (currentSection === 'courts') {

      Promise.all([getCourts(inn), getExecutive(inn)])
        .then(([courtsData, executiveData]) => {
          console.log(courtsData);
          console.log(executiveData);
          setAllCourts(courtsData[0]);
          setAllExecutives(executiveData[0]);
          setDisplayedCourts(filtrArrToLenghth(courtsData[0], 5));
          setDisplayedExecutives(filtrArrToLenghth(executiveData[0], 5));
        })

    }
  }, [inn, currentSection]);

  const defineSideCourt = (court: ICourt): string => {
    if (court.case_name === "Ответчик") {
      return court.list_of_plaintiffs[0];
    } else {
      return court.list_of_defendants[0];
    }
  }

  const showMoreCourts = (): void => {
    setDisplayedCourts(filtrArrToLenghth(allCourts, (displayedCourts.length + 5)));
  }

  const showMoreExecutive = (): void => {
    setDisplayedExecutives(filtrArrToLenghth(allExecutives, (displayedExecutives.length + 5)));
  }

  return (
    <section className={`courts ${(currentSection === 'courts') ? '' : 'courts_close'}`}>
      <div className="courts__courts">
        <h2 className="courts__title">СУДЫ</h2>
        {
          allCourts.length ?
          <>
            <div className="courts__courts-list">
              {displayedCourts.map((court: ICourt) => (
                <div className="courts__court-container" key={court.number_case}>
                  <p className="courts__item-date">{changeRecordOfDate(court.date)}</p>
                  <div className="courts__court-info-container">
                    <p className="courts__court-competitor">{defineSideCourt(court)}</p>
                    <p className="courts__court-category">{court.category}</p>
                  </div>
                  <p className="courts__court-number">{court.number_case}</p>
                </div>
              ))}
            </div>
            {
              (allCourts.length > displayedCourts.length) &&
              <button className="courts__more-button" onClick={showMoreCourts}>Ещё</button>
            }
          </> :
          <NoData />
        }
      </div>
      <div className="courts__executive">
        <h2 className="courts__title">ИСПОЛНИТЕЛЬНЫЕ ДОКУМЕНТЫ</h2>
        {
          allExecutives.length ?
          <>
            <div className="courts__executive-list">
              {displayedExecutives.map((executive: iExecutive, i: number) => (
                <div className="courts__executive-container" key={i}>
                  <p className="courts__item-date">{changeRecordOfDate(executive.date)}</p>
                  <div className="courts__executive-info-container">
                    <p className="courts__executive-info">{executive.case_name}</p>
                    <div className='courts__executive-status-container'>
                    <p className="courts__executive-status">{`${executive.status}:`}</p>
                    <p className="courts__executive-cost">{`${executive.cost} ₽`}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {
              (allExecutives.length > displayedExecutives.length) &&
              <button className="courts__more-button" onClick={showMoreExecutive}>Ещё</button>
            }
          </> :
          <NoData />
        }
      </div>
    </section>
  );
}

export default Courts;