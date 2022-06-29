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
      <li
        className={`card-menu__item ${(currentSection === 'aboutCompany') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('aboutCompany')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'aboutCompany') ? 'card-menu__item-text_active' : ''}`}
        >О компании</p>
      </li>
      <li
        className={`card-menu__item ${(currentSection === 'owners') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('owners')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'owners') ? 'card-menu__item-text_active' : ''}`}
        >Владельцы</p>
      </li>
      <li
        className={`card-menu__item ${(currentSection === 'branches') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('branches')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'branches') ? 'card-menu__item-text_active' : ''}`}
        >Филиалы</p>
      </li>
      <li
        className={`card-menu__item ${(currentSection === 'contacts') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('contacts')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'contacts') ? 'card-menu__item-text_active' : ''}`}
        >Контакты</p>
      </li>
      <li
        className={`card-menu__item ${(currentSection === 'courts') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('courts')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'courts') ? 'card-menu__item-text_active' : ''}`}
        >Суды</p>
      </li>
      <li
        className={`card-menu__item ${(currentSection === 'pladges') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('pladges')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'pladges') ? 'card-menu__item-text_active' : ''}`}
        >Залоги</p>
      </li>
      <li
        className={`card-menu__item ${(currentSection === 'inspections') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('inspections')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'inspections') ? 'card-menu__item-text_active' : ''}`}
        >Проверки</p>
      </li>
      <li
        className={`card-menu__item ${(currentSection === 'vacancies') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('vacancies')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'vacancies') ? 'card-menu__item-text_active' : ''}`}
        >Вакансии</p>
      </li>
      <li
        className={`card-menu__item ${(currentSection === 'requisites') ? 'card-menu__item_active' : ''}`}
        onClick={() => handleSetSection('requisites')}
      >
        <p
          className={`card-menu__item-text ${(currentSection === 'requisites') ? 'card-menu__item-text_active' : ''}`}
        >Реквизиты</p>
      </li>
    </menu>
  );
}

export default CardMenu;