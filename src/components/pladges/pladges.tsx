import { useEffect, useState } from 'react';

import { getPledges } from '../../utils/APICompanies';
import { IPledge } from '../../utils/interfaces';
import { filtrArrToLenghth, changeRecordOfDate } from '../../utils/utils';

import NoData from '../noData/noData';

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

  const [allPledges, setAllPledges] = useState<IPledge[]>([]);
  const [displaedPledges, setDisplaedPledges] = useState<IPledge[]>([]);

  useEffect(() => {
    if (currentSection === 'pladges') {
      getPledges(inn).then((data) => {
        console.log(data[0]);
        setAllPledges(data[0]);
        setDisplaedPledges(filtrArrToLenghth(data[0], 10));
      });
    }
  }, [inn, currentSection]);

  const showMorePledges = (): void => {
    setDisplaedPledges(filtrArrToLenghth(allPledges, (displaedPledges.length + 10)));
  }

  return (
    <section className={`pladges ${(currentSection === 'pladges') ? '' : 'pladges_close'}`}>
      <h2 className="pladges__title">В ЗАЛОГЕ / В ЛИЗИНГЕ</h2>
      {
        allPledges.length ?
        <>
          <div className="pladges__list">
            {displaedPledges.map((pledge: IPledge, i: number) => (
              <div className="pladges__pladge-container" key={i}>
                <p className="pladges__pladge-date">{changeRecordOfDate(pledge.agreement.publish_date)}</p>
                <div className="pladges__pladge-info-container">
                  <p className="pladges__pladge-category">{pledge.category}</p>
                  <p className="pladges__pladge-pladgee">{pledge.lessee_name}</p>
                  <p className="pladges__pladge-discription">{pledge.objects[0].description}</p>
                </div>
                <p className="pladges__pladge-type">{pledge.type}</p>
              </div>
            ))}
          </div>
          {
            (allPledges.length > displaedPledges.length) &&
            <button className="pladges__more-button" onClick={showMorePledges}>Ещё</button>
          }
        </> :
        <NoData />
      }
      
    </section>
  );
}

export default Pladges;

/*

<p className="pladges__pladge-date">{changeRecordOfDate(pledge.agreement.publish_date)}</p>

<p className="pladges__pladge-discription">{pledge.objects[0].description}</p>

*/