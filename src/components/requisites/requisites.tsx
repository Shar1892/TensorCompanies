import './requisites.css';

import { changeRecordOfDate } from '../../utils/utils';

function Requisites(
  {
    currentSection,
    fullName,
    ogrn,
    regNumberPf,
    okpo,
    regNumberFss,
    oktmo,
    mainOkvedName,
    mainOkved,
    okveds,
    registrationDate
  }:
  {
    currentSection: string;
    fullName: string;
    ogrn: string;
    regNumberPf: string;
    okpo: string;
    regNumberFss: string;
    oktmo: string;
    mainOkvedName: string;
    mainOkved: string;
    okveds: string;
    registrationDate: string;
  }
) {

  const okvedsArr: Array<string> = okveds.split(',');

  const formatFss = (fss: string): string => {
    const fssArr = fss.split('');
    const firstNewFssArr = fssArr.slice(0, 10);
    const secondNewFssArr = fssArr.slice(11);
    return `${firstNewFssArr.join('')}/${secondNewFssArr.join('')}`;
  }

  return (
    <section className={`requisites ${(currentSection === 'requisites') ? '' : 'requisites_close'}`}>
      <h2 className="requisites__title">РЕКВИЗИТЫ</h2>
      <div className="requisites__name-container">
        <p className="requisites__subtitle">Наименование</p>
        <p className="requisites__name">{fullName}</p>
      </div>
      <div className="requisites__requisites-container">
        <div className="requisites__requisite-container">
          <p className="requisites__subtitle">ОГРН</p>
          <p className="requisites__requisit">{ogrn}</p>
        </div>
        <div className="requisites__requisite-container">
          <p className="requisites__subtitle">Рег. номер ПФ</p>
          <p className="requisites__requisit">{regNumberPf}</p>
        </div>              
        <div className="requisites__requisite-container">
          <p className="requisites__subtitle">ОКПО</p>
          <p className="requisites__requisit">{okpo}</p>
        </div>
        <div className="requisites__requisite-container">
          <p className="requisites__subtitle">Рег. номер ФСС</p>
          <p className="requisites__requisit">{formatFss(regNumberFss)}</p>
        </div>
        <div className="requisites__requisite-container">
          <p className="requisites__subtitle">ОКТМО</p>
          <p className="requisites__requisit">{oktmo}</p>
        </div>
      </div>
      <div className="requisites__okved-container">
        <p className="requisites__subtitle">ОКВЭД</p>
        <p className="requisites__okved">{`${mainOkved} (${mainOkvedName})`}</p>
        <p className="requisites__link">{`Всего ${okvedsArr.length}`}</p>
      </div>
      <div className="requisites__registration-container">
        <p className="requisites__registration-subtitle">Регистрация компании</p>
        <p className="requisites__registration-date">{changeRecordOfDate(registrationDate)}</p>
      </div>
    </section>
  );
}

export default Requisites;