import './cardMenu.css';

function CardMenu() {

  return (
    <menu className="card-menu">
      <li className="card-menu__item card-menu__item_active">
        <p className="card-menu__item-text card-menu__item-text_active">О компании</p>
      </li>
      <li className="card-menu__item">
        <p className="card-menu__item-text">Владельцы</p>
      </li>
      <li className="card-menu__item">
        <p className="card-menu__item-text">Филиалы</p>
      </li>
      <li className="card-menu__item">
        <p className="card-menu__item-text">Контакты</p>
      </li>
      <li className="card-menu__item">
        <p className="card-menu__item-text">Суды</p>
      </li>
      <li className="card-menu__item">
        <p className="card-menu__item-text">Залоги</p>
      </li>
      <li className="card-menu__item">
        <p className="card-menu__item-text">Проверки</p>
      </li>
      <li className="card-menu__item">
        <p className="card-menu__item-text">Вакансии</p>
      </li>
      <li className="card-menu__item">
        <p className="card-menu__item-text">Реквизиты</p>
      </li>
    </menu>
  );
}

export default CardMenu;