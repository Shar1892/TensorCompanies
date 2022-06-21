import {
	ICompany,
	IBisinessCost,
	IOwner,
	IBranch,
	IContacts,
	ICourt,
	IExecutive,
	IPledge,
	IInspection,
} from './interfaces';


export const BASE_URL = 'http://localhost:4000';

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

export const getBranches = (inn: string): Promise<IBranch[][]> => {
	return fetch(`${BASE_URL}/branches/${inn}`, {
		mode: 'cors',	
		method: 'GET',
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		});
}

export const getContacts = (inn: string): Promise<IContacts[]> => {
	return fetch(`${BASE_URL}/contacts/${inn}`, {
		mode: 'cors',	
		method: 'GET',
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		});
}

export const getCourts = (inn: string): Promise<ICourt[][]> => {
	return fetch(`${BASE_URL}/courts/${inn}`, {
		mode: 'cors',	
		method: 'GET',
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		});
}

export const getExecutive = (inn: string): Promise<IExecutive[][]> => {
	return fetch(`${BASE_URL}/executive/${inn}`, {
		mode: 'cors',	
		method: 'GET',
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		});
}

export const getPledges = (inn: string): Promise<IPledge[][]> => {
	return fetch(`${BASE_URL}/pledges/${inn}`, {
		mode: 'cors',	
		method: 'GET',
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		});
}

export const getInspections = (inn: string): Promise<IInspection[][]> => {
	return fetch(`${BASE_URL}/inspections/${inn}`, {
		mode: 'cors',	
		method: 'GET',
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		});
}