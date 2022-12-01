import { atom } from 'recoil';

export const transactionListState = atom({
	key: 'transactionListState',
	default: [
		{
			id: 1,
			amount: 10,
			text: 'Found a 10 dollar bill!',
		},
		{
			id: 2,
			amount: -110,
			text: 'New keyboard',
		},
		{
			id: 3,
			amount: 300,
			text: 'Sold my old Playstation!',
		},
	],
});
