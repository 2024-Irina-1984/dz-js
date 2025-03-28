const inputArray = [3, 6, 9, 2];
const result = [];

 function inverseFilter(array, shouldDelete) {
    for(let i = 0;  i < array.length; i++) {
        const currentElement = array[i];
        if (!shouldDelete(currentElement)) {
            result.push(currentElement);
        }
     }
     return result;
}
function shouldDeleteGreaterThan5(number) {
    return number > 5;
  }
const filteredArray = inverseFilter(inputArray, shouldDeleteGreaterThan5);

console.log(filteredArray); 
