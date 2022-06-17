import {useEffect, useState} from 'react';

import {getBranches} from '../../utils/APICompanies';
import { IBranch } from '../../utils/interfaces';

import NoData from '../noData/noData';

import './branches.css';

function Branches(
  {
    currentSection,
    inn,
  }:
  {
    currentSection: string;
    inn: string;
  }
) {

  const [allBranches, setAllBranches] = useState<IBranch[]>([]);

  const [displayedBranches, setDisplayedBranches] = useState<IBranch[]>([]);

  //const [countdisplayedBranches, setCountdisplayedBranches] = useState<number>(0);

  useEffect(() => {
    if (inn && currentSection === 'branches') {
      getBranches(inn).then((data) => {
        console.log(data);
        setAllBranches(data[0]);
        const startBranches: IBranch[] = data[0].filter((branch, index) => {
          return index < 10;
        });
        console.log(startBranches);
        setDisplayedBranches(startBranches);
      });
    }
  }, [inn, currentSection]);

  const showMoreBranches = (): void => {
    const newDisplayedBranches: IBranch[] = allBranches.filter((branch, index) => {
      return index < displayedBranches.length + 10;
    });
    setDisplayedBranches(newDisplayedBranches);
  }

  return (
    <section className={`branches ${(currentSection === 'branches') ? '' : 'branches_close'}`}>
            <h2 className="branches__title">ФИЛИАЛЫ</h2>
            {
              allBranches.length ?
              <>
                <div className="branches__list">
                  {displayedBranches.map((branch: IBranch, i: number) => (
                    <div className="branches__branch" key={i}>
                    <div className="branches__info-container">
                      <h3 className="branches__branch-name">{branch.branch_name}</h3>
                      <p className="branches__branch-address">{branch.address}</p>
                    </div>
                    <p className="branches__branch-KPP">{branch.kpp}</p>
                  </div>
                  ))}
                </div>
                {
                  (allBranches.length > displayedBranches.length) &&
                  <button className="branches__more-button" onClick={showMoreBranches}>Ещё</button>
                }
              </> :
              <NoData />
            }
          </section>
  );
}

export default Branches;