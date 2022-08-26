import {useState} from 'react';

import "./search.css";

function Search(
  {
    searchCompany,
  }: {
    searchCompany: (query: string) => void,
  }
) {

  const [currentSearchQuery, setCurrentSearchQuery] = useState<string>('');

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
		setCurrentSearchQuery(evt.target.value);
    console.log(evt.target.value);
	};

  const handleSearchCompany = (evt: React.FormEvent<EventTarget>): void => {
    evt.preventDefault();
    searchCompany(currentSearchQuery);
  }

  return (
    <form className="search" onSubmit={handleSearchCompany}>
      <input 
        className="search__input"
        type="search"
        placeholder='Введите название или ИНН'
        onChange={handleInputChange}
        value={currentSearchQuery}
      />
      <button className="search__button" type="submit"></button>
    </form>
  );
}

export default Search;