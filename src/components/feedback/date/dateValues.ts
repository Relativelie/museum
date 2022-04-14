const current = new Date();
export const currentDate = current.getDate();
export const currentMonth = current.getMonth() + 1;
export const currentYear = current.getFullYear();

const numberOfDaysToAdd = 10;
const futureNumber = current.setDate(current.getDate() + numberOfDaysToAdd);
const future = new Date(futureNumber);
export const futureDate = future.getDate();
export const futureMonth = future.getMonth() + 1;
export const futureYear = future.getFullYear();
