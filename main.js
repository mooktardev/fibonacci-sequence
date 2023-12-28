/**
 * Fibonacci Sequence problem resolve with the non-recursive
 * @param {number} n size number to target
 * @returns array of fibonacci number
 */
const fibs = (n) => {
    const arr = [0, 1];

    if (n <= 0) return "Pleage give a positive numbre"
    if (n === 1) return [0]
    if (n === 2) return arr
    for(let i = 2; i < n; i++) {
        arr.push(arr[arr.length - 2] + arr[arr.length -1]);
    }

    return arr;
}
// Test fibs fonction with -2, 1, 4 and 8 as values of n
console.log('Non-recursive Fibonacci Sequence')
console.log(fibs(-2)); // Error message because negative value is not allowed
console.log(fibs(1)); // Output: [0]
console.log(fibs(2)); // Output: [0, 1]
console.log(fibs(4)); // Output: [0, 1, 1, 2]
console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]



/**
 * Fibonacci Sequence problem resolve by recusion solution
 * @param {number} n : prompt a number
 * @returns array of fibonacci numer
 */
const fibsRec = (n) => {
    return n <= 0
        ? "Pleage give a positive numbre"
        : n === 1
            ? [0]
            : n === 2
                ? [0, 1]
                : [...fibsRec(n-1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]]
}

// Test fibsRec fonction with n values as 1, 4, 8, 12
console.log('Recusive Fibonacci Sequence')
console.log(fibsRec(1)); // Output: [0]
console.log(fibsRec(2)); // Output: [0, 1]
console.log(fibsRec(4)); // Output: [0, 1, 1, 2]
console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]


/**
 * Sorting array
 * @param {Array} arr array to sort
 * @returns sorted array
 */
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merge sorted left and right elements of array
 * @param {number} left left array element
 * @param {number} right right array element
 * @returns merged array
 */
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

let array = [5, 8, 1, 4, 2, 9, 3, 7, 6];
console.log('Array before sorting:', array)
console.log('Array after sorting:', mergeSort(array));
