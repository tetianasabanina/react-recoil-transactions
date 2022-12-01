//  helper function for removing a transaction
export const removeItemAtIndex = (arr, index: number) => {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
