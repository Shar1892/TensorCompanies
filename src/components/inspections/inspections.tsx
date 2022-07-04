import { useEffect, useState } from 'react';

import { getInspections } from '../../utils/APICompanies';
import { IInspection } from '../../utils/interfaces';
import { filtrArrToLenghth, changeRecordOfDate } from '../../utils/utils';
import NoData from '../noData/noData';
import './inspections.css';

function Inspections(
  {
    currentSection,
    inn,
  }:
  {
    currentSection: string;
    inn: string;
  }
) {

  const [allInspections, setAllInspections] = useState<IInspection[]>([])
  const [displayedInspections, setDisplayedInspections] = useState<IInspection[]>([])

  useEffect(() => {
    if (currentSection === 'inspections') {
      getInspections(inn).then((data) => {
        console.log(data[0]);
        setAllInspections(data[0]);
        setDisplayedInspections(filtrArrToLenghth(data[0], 10))
      });
    }
  }, [inn, currentSection]);

  const showMoreInspections = (): void => {
    setDisplayedInspections(filtrArrToLenghth(allInspections, (displayedInspections.length + 10)));
  }

  return (
    <section className="inspections">
      <h2 className="inspections__title">ПРОВЕРКИ</h2>
      {
        allInspections.length ?
        <>
          <div className="inspections__list">
            {displayedInspections.map((inspection: IInspection, i: number) => (
              <div className="inspections__inspection-container" key={i}>
                <p className="inspections__inspection-date">{changeRecordOfDate(inspection.date_check)}</p>
                <div className="inspections__info-container">
                  <p className="inspections__inspection-name">{inspection.inspection_body_main}</p>
                  <p className="inspections__inspection-objective">{
                    inspection.inspection_objective ? inspection.inspection_objective : 'Цель проверки неизвестна'
                  }</p>
                </div>
              </div>
            ))}
          </div>
          {
            (allInspections.length > displayedInspections.length) &&
            <button className="inspections__more-button" onClick={showMoreInspections}>Ещё</button>
          }
        </> :
        <NoData />
      }
    </section>
  );
}

export default Inspections;