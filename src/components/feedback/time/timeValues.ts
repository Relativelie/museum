const currentDate = new Date();

const hours = currentDate.getHours().toString().length === 2 ? currentDate.getHours() : `0${currentDate.getHours()}`;
const minutes = currentDate.getMinutes().toString().length === 2 ? currentDate.getMinutes() : `0${currentDate.getMinutes()}`;

export const time = `${hours}:${minutes}`;
