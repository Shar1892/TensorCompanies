import "./Header.css";

import Search from "../search/search";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Компании</h1>
      <Search />
    </header>
  );
}

export default Header;