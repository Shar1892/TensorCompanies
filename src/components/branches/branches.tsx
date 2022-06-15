import {useEffect, useState} from 'react';

import {getBranches} from '../../utils/APICompanies';

function Branches(
  {
    currentSection,
    inn,
  }:
  {
    currentSection: string;
    inn: string;
  }
) {

  useEffect(() => {
    if (inn && currentSection === 'branches') {
      getBranches(inn).then((data) => {
        console.log(data);
        
      });
    }
  }, [inn, currentSection]);

  return (
    <div>
        Branches
    </div>
  );
}

export default Branches;