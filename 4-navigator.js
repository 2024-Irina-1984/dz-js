const positionLatitude = 10;   // текущее положение ширина
const positionLongitude = 20;   // долгота


const diagonal = ((positionLatitude ** 2) + (positionLongitude ** 2)) **0.5;

console.log("Диагональ прямоугольника: " + diagonal);