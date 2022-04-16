import "./search.css";

function Search() {
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder='Введите название или ИНН' />
      <button className="search__button"></button>
    </div>
  );
}

export default Search;