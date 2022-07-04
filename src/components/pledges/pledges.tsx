import { useEffect, useState } from 'react';

import { getPledges } from '../../utils/APICompanies';
import { IPledge } from '../../utils/interfaces';
import { filtrArrToLenghth, changeRecordOfDate } from '../../utils/utils';

import NoData from '../noData/noData';

import './pledges.css';

function Pledges(
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
    if (currentSection === 'pledges') {
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
    <section className="pledges">
      <h2 className="pledges__title">В ЗАЛОГЕ / В ЛИЗИНГЕ</h2>
      {
        allPledges.length ?
        <>
          <div className="pledges__list">
            {displaedPledges.map((pledge: IPledge, i: number) => (
              <div className="pledges__pledge-container" key={i}>
                <p className="pledges__pledge-date">{changeRecordOfDate(pledge.agreement.publish_date)}</p>
                <div className="pledges__pledge-info-container">
                  <p className="pledges__pledge-category">{pledge.category}</p>
                  <p className="pledges__pledge-pledgee">{pledge.lessee_name}</p>
                  <p className="pledges__pledge-discription">{pledge.objects[0].description}</p>
                </div>
                <p className="pledges__pledge-type">{pledge.type}</p>
              </div>
            ))}
          </div>
          {
            (allPledges.length > displaedPledges.length) &&
            <button className="pledges__more-button" onClick={showMorePledges}>Ещё</button>
          }
        </> :
        <NoData />
      }
    </section>
  );
}

export default Pledges;
