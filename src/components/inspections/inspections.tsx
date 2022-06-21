import { useEffect, useState } from 'react';

import { getInspections } from '../../utils/APICompanies';
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

  useEffect(() => {
    if (currentSection === 'inspections') {
      getInspections(inn).then((data) => {
        console.log(data[0]);
        
      });
    }
  }, [inn, currentSection]);

  return (
    <section className={`inspections ${(currentSection === 'inspections') ? '' : 'inspections_close'}`}>
      <h2 className="inspections__title">ПРОВЕРКИ</h2>
      <div className="inspections__list">
        <div className="inspections__inspection-container">
          <p className="inspections__inspection-date">21.06.21</p>
          <div className="inspections__info-container">
            <p className="inspections__inspection-name">Государственная инспекция труда в Ярославской области</p>
            <p className="inspections__inspection-objective">Осуществление федерального государственного надзора за соблюдением</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inspections;