import { useEffect, useState } from 'react';

import { getPledges } from '../../utils/APICompanies';

import './pladges.css';

function Pladges(
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
    if (currentSection === 'pladges') {
      getPledges(inn).then((data) => {
        console.log(data);

      });
    }
  }, [inn, currentSection]);

  return (
    <section className={`pladges ${(currentSection === 'pladges') ? '' : 'pladges_close'}`}>
            <h2 className="pladges__title">В ЗАЛОГЕ / В ЛИЗИНГЕ</h2>
            <div className="pladges__list">
              <div className="pladges__pladge-container">
                <p className="pladges__pladge-date">29.11.17</p>
                <div className="pladges__pladge-info-container">
                  <p className="pladges__pladge-category">Средства транспортные железнодорожные</p>
                  <p className="pladges__pladge-pladgee">МТС-Банк, ПАО</p>
                  <p className="pladges__pladge-discription">Вагон-хоппер для зерна модели 19-9549 - 100единиц</p>
                </div>
                <p className="pladges__pladge-type">В лизинге</p>
              </div>
            </div>
            <button className="pladges__more-button">Ещё</button>
          </section>
  );
}

export default Pladges;