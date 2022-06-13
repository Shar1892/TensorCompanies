import './cardMenu.css';

function CardMenu(
  {
    handleSetSection,
  }:
  {
    handleSetSection: (nameSection: string) => void;
  }
) {

  

  return (
    <menu className="card-menu">
      <li className="card-menu__item card-menu__item_active" onClick={() => handleSetSection('aboutCompany')}>
        <p className="card-menu__item-text card-menu__item-text_active">О компании</p>
      </li>
      <li className="card-menu__item" onClick={() => handleSetSection('owners')}>
        <p className="card-menu__item-text">Владельцы</p>
      </li>
      <li className="card-menu__item" onClick={() => handleSetSection('branches')}>
        <p className="card-menu__item-text">Филиалы</p>
      </li>
      <li className="card-menu__item" onClick={() => handleSetSection('contacts')}>
        <p className="card-menu__item-text">Контакты</p>
      </li>
      <li className="card-menu__item" onClick={() => handleSetSection('courts')}>
        <p className="card-menu__item-text">Суды</p>
      </li>
      <li className="card-menu__item" onClick={() => handleSetSection('pladges')}>
        <p className="card-menu__item-text">Залоги</p>
      </li>
      <li className="card-menu__item" onClick={() => handleSetSection('inspections')}>
        <p className="card-menu__item-text">Проверки</p>
      </li>
      <li className="card-menu__item" onClick={() => handleSetSection('vacancies')}>
        <p className="card-menu__item-text">Вакансии</p>
      </li>
      <li className="card-menu__item" onClick={() => handleSetSection('requisites')}>
        <p className="card-menu__item-text">Реквизиты</p>
      </li>
    </menu>
  );
}

export default CardMenu;