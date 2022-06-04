import {ICompany} from './interfaces';

//export const BASE_URL = 'https://api.sbis.ru/vok-demo/';
export const BASE_URL = 'http://localhost:4000';

export interface IResponce {
  status: boolean;
  data: any;
}

/*export const getCompniesList = (): Promise<IResponce> => {
	return fetch(`${BASE_URL}'req?inn=7605016030'`, {
  //return fetch(`${BASE_URL}'req?inn=7605016030&inn=7736050003&inn=7707049388&inn=7814593627&inn=7827004484&inn=6382082839&inn=7708503727&inn=7709464710'`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
		.then((res) => {
			debugger;
			if (res.ok) {
				return res.json();
			}
		});
}*/

export const getCompniesList = (): Promise<ICompany[]> => {
//export const getCompniesList = (): Promise<IResponce[]> => {
	return fetch(`${BASE_URL}/req`, {
  //return fetch(`${BASE_URL}'req?inn=7605016030&inn=7736050003&inn=7707049388&inn=7814593627&inn=7827004484&inn=6382082839&inn=7708503727&inn=7709464710'`, {
		mode: 'cors',	
		method: 'GET',
		/*headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},*/
	})
		.then((res) => {
			//debugger;
			if (res.ok) {
				return res.json();
			}
		});
}