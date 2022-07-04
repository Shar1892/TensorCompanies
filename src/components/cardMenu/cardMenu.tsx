import { NavLink } from 'react-router-dom';

import './cardMenu.css';

function CardMenu(
  {
    handleSetSection,
    currentSection,
  }:
  {
    handleSetSection: (nameSection: string) => void;
    currentSection: string
  }
) {

  return (
    <menu className="card-menu">
      <NavLink
        to='/card/about_company'
        className={`card-menu__item ${(currentSection === 'aboutCompany') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('aboutCompany')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'aboutCompany') ? 'card-menu__item-text_active' : ''}`}
        >О компании</p>
      </NavLink>
      <NavLink
        to="/card/owners"
        className={`card-menu__item ${(currentSection === 'owners') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('owners')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'owners') ? 'card-menu__item-text_active' : ''}`}
        >Владельцы</p>
      </NavLink>
      <NavLink
        to="/card/branches"
        className={`card-menu__item ${(currentSection === 'branches') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('branches')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'branches') ? 'card-menu__item-text_active' : ''}`}
        >Филиалы</p>
      </NavLink>
      <NavLink
        to="/card/contacts"
        className={`card-menu__item ${(currentSection === 'contacts') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('contacts')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'contacts') ? 'card-menu__item-text_active' : ''}`}
        >Контакты</p>
      </NavLink>
      <NavLink
        to="/card/courts"
        className={`card-menu__item ${(currentSection === 'courts') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('courts')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'courts') ? 'card-menu__item-text_active' : ''}`}
        >Суды</p>
      </NavLink>
      <NavLink
        to="/card/pledges"
        className={`card-menu__item ${(currentSection === 'pledges') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('pledges')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'pledges') ? 'card-menu__item-text_active' : ''}`}
        >Залоги</p>
      </NavLink>
      <NavLink
        to="/card/inspections"
        className={`card-menu__item ${(currentSection === 'inspections') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('inspections')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'inspections') ? 'card-menu__item-text_active' : ''}`}
        >Проверки</p>
      </NavLink>
      <NavLink
        to="/card/vacancies"
        className={`card-menu__item ${(currentSection === 'vacancies') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('vacancies')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'vacancies') ? 'card-menu__item-text_active' : ''}`}
        >Вакансии</p>
      </NavLink>
      <NavLink
        to="/card/requisites"
        className={`card-menu__item ${(currentSection === 'requisites') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('requisites')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'requisites') ? 'card-menu__item-text_active' : ''}`}
        >Реквизиты</p>
      </NavLink>
    </menu>
  );
}

export default CardMenu;