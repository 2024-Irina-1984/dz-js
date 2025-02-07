const age = 18;
const hasLicence = true;
const isDrunk = false;
const drivecar = (age >= 18) && hasLicence && !isDrunk;
console.log(`Пользователь может управлять машиной: ${drivecar ? 'Может' : 'Не может'}`);
