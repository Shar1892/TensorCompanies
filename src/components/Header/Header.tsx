import "./Header.css";

import Search from "../search/search";

function Header(
  {
    searchCompany,
    resetFoundedCompanies,
  }: {
    searchCompany: (query: string) => void,
    resetFoundedCompanies: () => void,
  }
) {
  return (
    <header className="header">
      <h1 className="header__title">Компании</h1>
      <Search searchCompany={searchCompany} resetFoundedCompanies={resetFoundedCompanies} />
    </header>
  );
}

export default Header;