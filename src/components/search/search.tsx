import {useState} from 'react';

import "./search.css";

function Search(
  {
    searchCompany,
    resetFoundedCompanies,
  }: {
    searchCompany: (query: string) => void,
    resetFoundedCompanies: () => void,
  }
) {

  const [currentSearchQuery, setCurrentSearchQuery] = useState<string>('');

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
		setCurrentSearchQuery(evt.target.value);
	};

  const handleSearchCompany = (evt: React.FormEvent<EventTarget>): void => {
    evt.preventDefault();
    searchCompany(currentSearchQuery);
  }

  const resetQuery = (): void => {
    resetFoundedCompanies();
    setCurrentSearchQuery('');
  }

  return (
    <form className="search" onSubmit={handleSearchCompany}>
      <input 
        className="search__input"
        type="text"
        placeholder='Введите название или ИНН'
        onChange={handleInputChange}
        value={currentSearchQuery}
      />
      <div className='search__button-container'>
        <button className="search__button-reset" type="button" onClick={resetQuery}></button>
        <button className="search__button-search" type="submit"></button>
      </div>
    </form>
  );
}

export default Search;