import './companyPreview.css';

function CompanyPreview({
  companyData,
  openCard
}: {
  companyData: {
    inn: string;
    company_name: string;
    region: string;
    director_egrul_surname: string;
    director_egrul_name: string;
    director_egrul_patronymic: string;
    activity_kind: string;
    kpp: string;
  };
  openCard: (inn: string) => void 
}) {

  const handleOpenCompany = (): void => {
    console.log(companyData);
    openCard(companyData.inn);
  }

  return (

    <div className="company-preview" onClick={handleOpenCompany}>
      <div className="company-preview__description-container">
        <div className="company-preview__row-container">
          <h2 className="company-preview__name">{companyData.company_name}</h2>
          <p className="company-preview__description">{companyData.region}</p>
        </div>
        <div className="company-preview__row-container">
          <p className="company-preview__director">{`${companyData.director_egrul_surname} ${companyData.director_egrul_name[0]}. ${companyData.director_egrul_patronymic[0]}.`}</p>
          <p className="company-preview__description">{companyData.activity_kind}</p>
        </div>
      </div>
      <div className="company-preview__requisites-container">
        <p className="company-preview__requisites">{companyData.inn}</p>
        <p className="company-preview__requisites">{companyData.kpp}</p>
      </div>
    </div>    
  );
}

export default CompanyPreview;