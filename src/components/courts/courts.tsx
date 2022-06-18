import {useEffect, useState} from 'react';

import './courts.css';

import { getCourts } from '../../utils/APICompanies';

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

  useEffect(() => {
    if (currentSection === 'courts') {
      getCourts(inn).then((data) => {
        console.log(data);
        
      });
    }
  }, [inn, currentSection]);

  return (
    <section className={`courts ${(currentSection === 'courts') ? '' : 'courts_close'}`}>
      <div className="courts__courts">
        <h2 className="courts__title">СУДЫ</h2>
          <div className="courts__courts-list">
            <div className="courts__court-container">
              <p className="courts__item-date">11.03.22</p>
              <div className="courts__court-info-container">
                <p className="courts__court-competitor">Энергостройсервис, ООО</p>
                <p className="courts__court-category">экономические споры по гражданским правоотношениям</p>
              </div>
              <p className="courts__court-number">А82-3563/2022</p>
            </div>
          </div>
        <button className="courts__more-button">Ещё</button>
      </div>
      <div className="courts__executive">
        <h2 className="courts__title">ИСПОЛНИТЕЛЬНЫЕ ДОКУМЕНТЫ</h2>
        <div className="courts__executive-list">
          <div className="courts__executive-container">
            <p className="courts__item-date">11.03.22</p>
            <div className="courts__executive-info-container">
              <p className="courts__executive-info">Акт по делу об административном правонарушении</p>
              <p className="courts__executive-info">Штраф ГИБДД: 2000 ₽</p>
            </div>
          </div>
          </div>
        <button className="courts__more-button">Ещё</button>
      </div>
    </section>
  );
}

export default Courts;