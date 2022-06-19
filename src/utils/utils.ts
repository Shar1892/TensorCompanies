// Добавляю + в запись положительной разницы
export const changeRecordOfDifference = (difference: number): string => {
  if (difference >= 0) {
    return `+${difference}`;
  } else {
    return `${difference}`;
  }
}

// Меняю запись даты с ГГГГ.ММ.ДД на ДД.ММ.ГГ 
export const changeRecordOfDate = (date: string): string => {
  let dateArr: Array<string> = date.split('-');
  return `${dateArr[2]}.${dateArr[1]}.${dateArr[0].slice(2)}`;
}

// Из списка конкурентов выбираю нужного по ИНН и вывожу его стоимость
export const getCost = (currentINN: string, competitors: {
  revenue: number;
  cost: number;
  inn: string;
}[]): string | undefined => {
  const currentCompany = competitors.find((item) => {
    return item.inn === currentINN;
  });

  if (currentCompany) {
    return formatSum(currentCompany.cost);
  }
}

// Из списка конкурентов выбираю нужного по ИНН и вывожу его выручку
export const getRevenue = (currentINN: string, competitors: {
  revenue: number;
  cost: number;
  inn: string;
}[]): string | undefined => {
  const currentCompany = competitors.find((item) => {
    return item.inn === currentINN;
  });

  if (currentCompany) {
    return formatSum(currentCompany.revenue);
  }
}

// Форматирую замись чисел
const formatSum = (sum: number): string => {
  if (sum < 1000) {
    return `${sum}`
  } else if (sum < 1000000) {
    return `${Math.floor(sum / 1000)} тыс.`
  } else if (sum < 1000000000) {
    return `${Math.floor(sum / 1000000)} млн.`
  } else if (sum < 1000000000000) {
    return `${Math.floor(sum / 1000000000)} млрд.`
  } else {
    return `${Math.floor(sum / 1000000000000)} трлн.`
  }
}

// Полуучаю обрезанный массив до заданной длины
export const filtrArrToLenghth = (arr: any[], length: number): any[] => {
  const resultArr: any[] = arr.filter((item, index) => {
    return index < length;
  })
  return resultArr;
}