import {
	ICompany,
	IBisinessCost,
	IOwner,
} from './interfaces';


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

export const getCompaniesOwners = (inn: string): Promise<IOwner[][]> => {
	return fetch(`${BASE_URL}/owners/${inn}`, {
		mode: 'cors',	
		method: 'GET',
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		});
}