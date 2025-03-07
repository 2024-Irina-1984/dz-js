function sortArray(arr0, ascending = true) {

    const sortedArr = [...arr0];
    for (let i = 0; i < sortedArr.length; i++) {
    
    for (let j = 0; j < sortedArr.length - 1; j++) {
        if (ascending) {
        if (sortedArr[j] > sortedArr[j + 1]) {
            const temp = sortedArr[j];
            sortedArr[j] = sortedArr[j + 1];
            sortedArr[j + 1] = temp;
                    }
} 
            }
        }
    return sortedArr;
}
    
const arr0 = [1, 40, -5, 10, 0];
const sortedAsc = sortArray(arr0, true); 
    
console.log("Отсортированный по возрастанию:", sortedAsc);