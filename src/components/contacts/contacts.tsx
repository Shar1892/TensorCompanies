import {useEffect, useState} from 'react';

import { getContacts } from '../../utils/APICompanies';

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

  useEffect(() => {
    if (inn && currentSection === 'contacts') {
      getContacts(inn).then((data) => {
        console.log(data[0]);
      });
    }
  }, [inn, currentSection]);

  return (
    <section className={`contacts ${(currentSection === 'contacts') ? '' : 'contacts_close'}`}>
      <h2 className="contacts__title">КОНТАКТЫ</h2>
      <div className="contacts__container">
        <h3 className="contacts__subtitle">Телефоны</h3>
        <div className="contacts__list">
          <p className="contacts__contact">89206539874</p>                
        </div>
        <button className="contacts__more-button">Ещё</button>
      </div>
      <div className="contacts__container">
        <h3 className="contacts__subtitle">Адреса лектронной почты</h3>
        <div className="contacts__list">
          <p className="contacts__contact">mail@mail.ru</p>
        </div>
        <button className="contacts__more-button">Ещё</button>
      </div>
      <div className="contacts__container">
        <h3 className="contacts__subtitle">Сайты</h3>
        <div className="contacts__items-container">
          <p className="contacts__contact">website.com</p>
        </div>
        <button className="contacts__more-button">Ещё</button>
      </div>
    </section>
  );
}

export default Contacts;