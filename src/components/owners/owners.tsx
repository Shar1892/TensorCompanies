import {useEffect, useState} from 'react';

import './owners.css';

import Preloader from '../preloader/preloader';
import NoData from '../noData/noData';
import {IOwner} from '../../utils/interfaces';
import {getCompaniesOwners} from '../../utils/APICompanies';
import {changeRecordOfDate} from '../../utils/utils';

function Owners(
  {
    currentSection,
    inn,
  }:
  {
    currentSection: string;
    inn: string;
  }
) {

  const [ownersList, setOwnersList] = useState<IOwner[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (currentSection === 'owners') {
      getCompaniesOwners(inn).then((data) => {
        console.log(data);
        
        setOwnersList(data[0]);
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }, [inn, currentSection]);

  return (
    <section className="owners">
      <div className="owners__header">
        <h2 className="owners__title">ВЛАДЕЛЬЦЫ</h2>
        <div className="owners__headers-container">
          <p className="owners__headers-INN">ИНН</p>
          <p className="owners__headers-cost">Сумма, ₽</p>
          <p className="owners__headers-share">%</p>
        </div>
      </div>
      {
        isLoading ?
        <Preloader /> :
        ownersList.length ?
        <div className="owners__list">
          {ownersList.map((owner: IOwner) => (
            <div className="owners__owner-container" key={owner.inn}>
              <div className="owners__owner-discription-container">
                <p className="owners__owner-name">{owner.face_name}</p>
                <p className="owners__owner-discription">{`${owner.region} c ${changeRecordOfDate(owner.date_begin)}`}</p>
              </div>
              <div className="owners__owner-info-container">
                <p className="owners__owner-INN">{owner.inn}</p>
                <p className="owners__owner-cost">{Math.round(owner.cost)}</p>
                <p className="owners__owner-share">{`≈ ${Math.round(owner.share)}`}</p>
              </div>
            </div>
          ))} 
        </div> :
        <NoData />
      }
    </section>
  );
}

export default Owners;


/*

isLoading ?
        <Preloader /> :

*/