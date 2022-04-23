import "./companiesList.css";

function CompaniesList() {
  return (
    <main className="companiesList">
      <div className="companiesList__header">
        <p className="companiesList__description-title">Название</p>
        <div className="companiesList__requisites-container">
          <p className="companiesList__requisites-title">ИНН</p>
          <p className="companiesList__requisites-title">КПП</p>
        </div>
      </div>
    </main>
  );
}

export default CompaniesList;