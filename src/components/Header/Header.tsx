import "./Header.css";

import Search from "../search/search";

function Header(
  {
    searchCompany,
  }: {
    searchCompany: (query: string) => void,
  }
) {
  return (
    <header className="header">
      <h1 className="header__title">Компании</h1>
      <Search searchCompany={searchCompany} />
    </header>
  );
}

export default Header;