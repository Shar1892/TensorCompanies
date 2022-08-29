import "./Header.css";

import Search from "../search/search";

function Header(
  {
    searchCompany,
    resetFoundedCompanies,
    searchValue,
  }: {
    searchCompany: (query: string) => void,
    resetFoundedCompanies: () => void,
    searchValue: string,
  }
) {
  return (
    <header className="header">
      <h1 className="header__title">Компании</h1>
      <Search 
        searchCompany={searchCompany}
        resetFoundedCompanies={resetFoundedCompanies}
        searchValue={searchValue}
      />
    </header>
  );
}

export default Header;