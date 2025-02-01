const positionLatitude = 10;   // текущее положение ширина
const positionLongitude = 20;   // долгота


function calculateDiagonal(positionLatitude, positionLongitude) {
    const diagonal = Math.sqrt(positionLatitude * positionLatitude + positionLongitude * positionLongitude);
    return diagonal;
}
const diagonal = calculateDiagonal(positionLatitude, positionLongitude);
console.log("Диагональ прямоугольника: " + diagonal);