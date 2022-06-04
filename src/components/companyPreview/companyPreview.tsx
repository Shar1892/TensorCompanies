function CompanyPreview({companyData}: {companyData: {inn: string}}) {
  return (
    <div>{companyData.inn}</div>    
  );
}

export default CompanyPreview;