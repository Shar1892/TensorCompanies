import {useEffect, useState} from 'react';

import { getContacts } from '../../utils/APICompanies';
import { filtrArrToLenghth } from '../../utils/utils';

import Preloader from '../preloader/preloader';
import NoData from '../noData/noData';

import './contacts.css';

function Contacts(
  {
    currentSection,
    inn,
  }:
  {
    currentSection: string;
    inn: string;
  }
) {

  const [allPhones, setAllPhones] = useState<string[]>([]);
  const [allSites, setAllSites] = useState<string[]>([]);
  const [allEmails, setAllEmails] = useState<string[]>([]);

  const [displayedPhones, setDisplayedPhones] = useState<string[]>([]);
  const [displayedSites, setDisplayedSites] = useState<string[]>([]);
  const [displayedEmails, setDisplayedEmails] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (currentSection === 'contacts') {
      getContacts(inn).then((data) => {
        console.log(data[0]);
        setAllPhones(data[0].phone_numbers);
        setAllSites(data[0].sites);
        setAllEmails(data[0].emails);

        setDisplayedPhones(filtrArrToLenghth(data[0].phone_numbers, 5));
        setDisplayedSites(filtrArrToLenghth(data[0].sites, 5));
        setDisplayedEmails(filtrArrToLenghth(data[0].emails, 5));
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }, [inn, currentSection]);

  const showMorePhones = (): void => {
    setDisplayedPhones(filtrArrToLenghth(allPhones, (displayedPhones.length + 5)));
  }

  const showMoreEmails = (): void => {
    setDisplayedEmails(filtrArrToLenghth(allEmails, (displayedEmails.length + 5)));
  }

  const showMoreSites = (): void => {
    setDisplayedSites(filtrArrToLenghth(allSites, (displayedSites.length + 5)));
  }

  return (
    <section className="contacts">
      <h2 className="contacts__title">КОНТАКТЫ</h2>
      {
        isLoading ?
        <Preloader />:
        <>
          <div className="contacts__container">
            <h3 className="contacts__subtitle">Телефоны</h3>
            {
              allPhones.length ?
              <>
                <div className="contacts__list">
                  {displayedPhones.map((phone) => (
                    <p className="contacts__contact" key={phone}>{`+${phone}`}</p>
                  ))}                
                </div>
                {
                  (allPhones.length > displayedPhones.length) &&
                  <button className="contacts__more-button" onClick={showMorePhones}>Ещё</button>
                }
              </> :
              <NoData />
            }
          </div>
          <div className="contacts__container">
            <h3 className="contacts__subtitle">Адреса лектронной почты</h3>
            {
              allEmails.length ?
              <>
                <div className="contacts__list">
                  {displayedEmails.map((email) => (
                    <p className="contacts__contact" key={email}>{email}</p>
                  ))}
                </div>
                {
                  (allEmails.length > displayedEmails.length) &&
                  <button className="contacts__more-button" onClick={showMoreEmails}>Ещё</button>
                }
              </> :
              <NoData />
            }
          </div>
          <div className="contacts__container">
            <h3 className="contacts__subtitle">Сайты</h3>
            {
              allSites.length ?
              <>
                <div className="contacts__list">
                  {displayedSites.map((site) => (
                    <p className="contacts__contact" key={site}>{site}</p>
                  ))}
                </div>
                {
                  (allSites.length > displayedSites.length) &&
                  <button className="contacts__more-button" onClick={showMoreSites}>Ещё</button>
                }
              </> :
              <NoData />
            }
          </div>
        </>
      }
    </section>
  );
}

export default Contacts;