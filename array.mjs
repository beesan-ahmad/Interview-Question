/* if the target that we are looking for is present in array then returns the index of
LAST occurrence/appearance of the target in the array[0..arrayLength-1], otherwise
returns -1 */

function lastIndex(array, low, high, target, arrayLength) {
    if (high >= low) {
        let midPoint = low + Math.floor((high - low) / 2);

        if ((midPoint == arrayLength - 1 || target < array[midPoint + 1])
            && array[midPoint] == target) {
            return midPoint;
        }
        else if (target < array[midPoint]) {
            return lastIndex(array, low, (midPoint - 1), target, arrayLength);
        }
        else {
            return lastIndex(array, (midPoint + 1), high, target, arrayLength);
        }
    }
    return -1;
}

/* if the target that we are looking for is present in array then returns the index of
FIRST occurrence/appearance of the target in the array[0..arrayLength-1], otherwise
returns -1 */

function firstIndex(array, low, high, target, arrayLength) {
    if (high >= low) {
        let midPoint = low + Math.floor((high - low) / 2);

        if ((midPoint == 0 || target > array[midPoint - 1]) && array[midPoint] == target) {
            return midPoint;
        }
        else if (target > array[midPoint]) {
            return firstIndex(array, midPoint + 1, high, target, arrayLength);
        }
        else {
            return firstIndex(array, low, midPoint - 1, target, arrayLength);
        }
    }
    return -1;
}
/* Testing: if the target = 7, firstIndex = 1 and lastIndex = 5 */
let array = [1, 7, 7, 7, 7, 7, 12];
let arrayLength = array.length;
let target1 = 7;
console.log("First Index = " + firstIndex(array, 0, arrayLength - 1, target1, arrayLength));
console.log("Last Index = " + lastIndex(array, 0, arrayLength - 1, target1, arrayLength));
console.log("**********************************");

/* Testing: if the target = 14 which is not exist in the array,
 firstIndex = -1 and lastIndex = -1 */
let target2 = 14;
console.log("First Index = " + firstIndex(array, 0, arrayLength - 1, target2, arrayLength));
console.log("Last Index = " + lastIndex(array, 0, arrayLength - 1, target2, arrayLength));
console.log("**********************************");

/* Testing: if the target = 12 which is appear once in the array it will have the same first
and last index,
 firstIndex = 6 and lastIndex = 6 */
let target3 = 12;
console.log("First Index = " + firstIndex(array, 0, arrayLength - 1, target3, arrayLength));
console.log("Last Index = " + lastIndex(array, 0, arrayLength - 1, target3, arrayLength));
console.log("**********************************");
