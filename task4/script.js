// Do the below programs in anonymous function & IIFE

// a.Print odd numbers in an array

// using normal function
// ans:
// function odd(arr){
// for(var i=0;i<arr.length;i++)
// if(arr[i]%2!==0){
//     result.push(arr[i])
// }
// return result
// }
// console.log(odd([1,2,3,4,5,6,7,8,9,10]))

// anonymous function
// var result=[]
// var a=function odd(arr){
//     for(var i=0;i<arr.length;i++)
//     if(arr[i]%2!==0){
//         result.push(arr[i])
//     }
//     return result
//     }
//     console.log(odd([1,2,3,4,5,6,7,8,9,10]))

// print odd numbers using IIFE function
    // using IIFE function
//      var result=[]
//     var a=(function (arr){
//         for(var i=0;i<arr.length;i++){
//         if(arr[i]%2!==0)
//         {
//             result.push(arr[i])
//         }
//     }
//         console.log(result);
// })([1,2,3,4,5,6,7,8,9,10]);

//2. b . print odd numbers using arrow function
// var result=[];
//     var odd=(arr)=>{
//         for(var i=0;i<arr.length;i++){
//         if(arr[i]%2!==0)
//         {
//             result.push(arr[i])
//         }
//     }
//         return result
// }

// console.log(odd([1,2,3,4,5,6,7,8,9,10]));

// 2.Convert all the strings to title caps in a string array
// using anonymous function

// const stringArray = ["hello world", "this is a test", "javascript programming"];

// const title = stringArray.map(function(str) {
//     return str.split(' ').map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
// });

// console.log(title);

// using IIFE function

// const stringArray = ["hello world", "this is a test", "javascript programming"];

// const titleCap = (function(strings) {
//     return strings.map(function(str) {
//         return str.split(' ').map(function(word) {
//             return word.charAt(0).toUpperCase() + word.slice(1);
//         }).join(' ');
//     });
// })(stringArray);

// console.log(titleCap);

// using arrow function
// const stringArray = ["hello world", "this is a test", "javascript programming"];

// const titleCappedArray = stringArray.map(str =>
//     str.split(' ').map(word =>
//         word.charAt(0).toUpperCase() + word.slice(1)
//     ).join(' ')
// );

// console.log(titleCappedArray);



// 3.Sum of all numbers in an array
// using anonymous function

// const numberArray = [1, 2, 3, 4, 5];

// const sum = function(numbers) {
//     let total = 0;
//     numbers.forEach(function(num) {
//         total += num;
//     });
//     return total;
// };

// console.log(sum(numberArray)); // Output: 15

// using iife function
// const numberArray = [1, 2, 3, 4, 5];

// const sum = (function(numbers) {
//     let total = 0;
//     numbers.forEach(function(num) {
//         total += num;
//     });
//     return total;
// })(numberArray);

// console.log(sum); // Output: 15


// using arrow function
// const numberArray = [1, 2, 3, 4, 5];

// const sum = (numbers) => {
//     return numbers.reduce((total, num) => total + num, 0);
// };

// console.log(sum(numberArray)); // Output: 15


// 4.Return all the prime numbers in an array
// using anonymous function
// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const findPrimes = function(numbers) {
//     const isPrime = function(num) {
//         if (num <= 1) {
//             return false;
//         }
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     };
    
//     return numbers.filter(function(num) {
//         return isPrime(num);
//     });
// };

// console.log(findPrimes(numberArray)); // Output: [2, 3, 5, 7]

// using iife function
// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const primes = (function(numbers) {
//     const isPrime = function(num) {
//         if (num <= 1) {
//             return false;
//         }
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     };
    
//     return numbers.filter(function(num) {
//         return isPrime(num);
//     });
// })(numberArray);

// console.log(primes); // Output: [2, 3, 5, 7]

// using arrow function

// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const primes = ((numbers) => {
//     const isPrime = (num) => {
//         if (num <= 1) {
//             return false;
//         }
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     };
    
//     return numbers.filter(num => isPrime(num));
// })(numberArray);

// console.log(primes); // Output: [2, 3, 5, 7]

// 4.Return all the palindromes in an array 
// using anonymous function
// const stringArray = ["hello", "level", "radar", "world", "noon"];

// const findPalindromes = function(strings) {
//     const isPalindrome = function(str) {
//         const reversed = str.split('').reverse().join('');
//         return str === reversed;
//     };

//     return strings.filter(function(str) {
//         return isPalindrome(str);
//     });
// };

// console.log(findPalindromes(stringArray)); // Output: ["level", "radar", "noon"]

// using iife function
// const stringArray = ["hello", "level", "radar", "world", "noon"];

// const palindromes = (function(strings) {
//     const isPalindrome = function(str) {
//         const reversed = str.split('').reverse().join('');
//         return str === reversed;
//     };
    
//     return strings.filter(function(str) {
//         return isPalindrome(str);
//     });
// })(stringArray);

// console.log(palindromes); // Output: ["level", "radar", "noon"]

// using arrow function
// const stringArray = ["hello", "level", "radar", "world", "noon"];

// const palindromes = ((strings) => {
//     const isPalindrome = (str) => {
//         const reversed = str.split('').reverse().join('');
//         return str === reversed;
//     };
    
//     return strings.filter(str => isPalindrome(str));
// })(stringArray);

// console.log(palindromes); // Output: ["level", "radar", "noon"]

// 6.Return median of two sorted arrays of the same size.

// using anonymous function
// const findMedianSortedArrays = function(arr1, arr2) {
//     const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
//     const length = mergedArray.length;
//     const middle = Math.floor(length / 2);

//     if (length % 2 === 0) {
//         return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
//     } else {
//         return mergedArray[middle];
//     }
// };

// // Example usage:
// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
// console.log(findMedianSortedArrays(arr1, arr2)); // Output: 3.5

// using iife function
// const findMedianSortedArrays = (function() {
//     return function(arr1, arr2) {
//         const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
//         const length = mergedArray.length;
//         const middle = Math.floor(length / 2);

//         if (length % 2 === 0) {
//             return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
//         } else {
//             return mergedArray[middle];
//         }
//     };
// })();

// // Example usage:
// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
// console.log(findMedianSortedArrays(arr1, arr2)); // Output: 3.5
 
// 7.Remove duplicates from an array
// const removeDuplicates = function(arr) {
//     return arr.filter(function(item, index) {
//         return arr.indexOf(item) === index;
//     });
// };

// // Example usage:
// const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
// const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
// console.log(arrayWithoutDuplicates); // Output: [1, 2, 3, 4, 5]

// using iife function
// const array = [1, 2, 3, 4, 2, 3, 5];

// const uniqueArray = (function(arr) {
//     return arr.filter(function(item, index) {
//         return arr.indexOf(item) === index;
//     });
// })(array);

// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]


// 8.Rotate an array by k times using 
// using anonymous function
// const rotateArray = function(arr, k) {
//     const len = arr.length;
//     k = k % len; // Ensure k is within the range of array length

//     const rotatedArray = arr.slice(len - k).concat(arr.slice(0, len - k));
//     return rotatedArray;
// };

// // Example usage:
// const array = [1, 2, 3, 4, 5];
// const k = 3;
// const rotatedArray = rotateArray(array, k);
// console.log(rotatedArray); // Output: [3, 4, 5, 1, 2]

// using IIFE function
// const array = [1, 2, 3, 4, 5];
// const k = 3;

// const rotatedArray = (function(arr, k) {
//     const len = arr.length;
//     k = k % len; // Ensure k is within the range of array length

//     const rotatedArray = arr.slice(len - k).concat(arr.slice(0, len - k));
//     return rotatedArray;
// })(array, k);

// console.log(rotatedArray); // Output: [3, 4, 5, 1, 2]












    
       
