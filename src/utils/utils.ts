export const changeRecordOfDifference = (difference: number): string => {
  if (difference >= 0) {
    return `+${difference}`;
  } else {
    return `${difference}`;
  }
}

export const changeRecordOfDate = (date: string): string => {
  let dateArr: Array<string> = date.split('-');
  return `${dateArr[2]}.${dateArr[1]}.${dateArr[0].slice(2)}`;
}