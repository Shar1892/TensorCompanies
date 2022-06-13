import './cardHeader.css';

function CardHeader({
  closeCard,
  dropSection,
  inn,
  region,
  kpp,
  name
}: {
  closeCard: () => void;
  dropSection: () => void;
  inn: string;
  region: string;
  kpp: string;
  name: string;
}) {

  const handlecloseCompany = (): void => {
    closeCard();
    dropSection();
  }

  return (
    <div className="card-header">
      <div className=".card-header__information">
        <div className="card-header__requisites-container">
          <p className="card-header__region">{region}</p>
        <div className="card-header__requisit-container">
          <p className="card-header__requisit-name">ИНН</p>
          <p className="card-header__requisit-value">{inn}</p>
        </div>
        <div className="card-header__requisit-container">
          <p className="card-header__requisit-name">КПП</p>
          <p className="card-header__requisit-value">{kpp}</p>
        </div>
      </div>
      <h2 className="card-header__company-name">{name}</h2>
      </div>
      <button className="card-header__close-button" onClick={handlecloseCompany}></button>
    </div>
  );
}

export default CardHeader;