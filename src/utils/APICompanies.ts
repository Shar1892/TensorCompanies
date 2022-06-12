import {ICompany, IBisinessCost} from './interfaces';


export const BASE_URL = 'http://localhost:4000';

/*export interface IResponce {
  status: boolean;
  data: any;
}*/

export const getCompniesList = (): Promise<ICompany[]> => {
	return fetch(`${BASE_URL}/req`, {
		mode: 'cors',	
		method: 'GET',
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		});
}

//export const getBisinessCost = (inn: string): Promise<{}> => {
export const getDataBisinessCost = (inn: string): Promise<IBisinessCost[]> => {
	return fetch(`${BASE_URL}/business/${inn}`, {
		mode: 'cors',	
		method: 'GET',
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		});
}