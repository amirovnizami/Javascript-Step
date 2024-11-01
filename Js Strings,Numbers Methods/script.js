// String Method Tasks

// 1. Capitalize the first letter of a given string.
// Example: "hello" → "Hello"

// let str = "hello";
// console.log(str.replace("h",str.charAt(0).toUpperCase()))


// 2. Check if a string contains a specific substring.
// Example: "Hello World", substring "World" → true

// let str ="Salam";
// console.log(str.includes('Sal'))

// 3. Repeat a given string 'n' times.
// Example: "abc", 3 → "abcabcabc"

// console.log(str.repeat(3))
// 4. Replace all occurrences of a specific word in a string with another word.
// Example: "I love apples", replace "apples" with "oranges" → "I love oranges"
// let str1 = "I love apples";

// console.log(str1.replaceAll("apples","oranges"))
// 5. Count the number of words in a sentence.
// // Example: "Hello World!" → 2
// var arr = str1.split(" ");

// console.log(arr.length)
// 6. Reverse the characters in a given string.
// Example: "hello" → "olleh"
// var strArr = str.split("");
// var newStr = "";
// for (let i = strArr.length -1 ; i>=0 ; i--){
//     newStr +=strArr[i];
//     console.log(strArr[i])
// }
// console.log(newStr)
// 7. Extract the text between two characters.
// Example: "Hello [World]", characters "[" and "]" → "World"

// let str2 = "Hello [World]";

// console.log(str2.substring(7,12))


// 8. Convert a string to snake_case format.
// Example: "Hello World" → "hello_world"

// let str ="Hello World";

// var newStr = str.toLowerCase().replace(" ","_")
// console.log(newStr)

// 9. Remove leading, trailing, and extra spaces in a string.
// Example: "   Hello    World   " → "Hello World"

// var str = "   Hello    World    ";
// let splitString = str.split("   ")

// let newStr = splitString[1] + splitString [ 2];
// console.log(newStr)
// 10. Identify the longest word in a given sentence.
// Example: "I love programming" → "programming"

// let str =  "I love programming";
// let newStr = str.split(" ");
// console.log(newStr);
// let maxLength = "";
// let maxCount = 0;
// for(let i = 0;i<newStr.length;i++){
//     maxCount = 0;
//     if(maxCount<=newStr[i].length){
//         maxCount = newStr[i].length;
//         maxLength = newStr[i];
//     }
// }
// console.log(maxLength," - ",maxCount)

// Number Method Tasks

// 1. Convert a string to a number and handle invalid cases.
// Example: "123" → 123, "abc" → NaN

// let str = "231"
// let str2 = "adaa"
// console.log(Number(str))
// console.log(Number(str2))

// // 2. Round a decimal number to two decimal places.
// // Example: 3.14159 → 3.14

// let num1 = 3.14159
// console.log(num1.toFixed(2))
// 3. Write a function that returns the square root of a given number.
// Example: 5 → 25

// 4. Write a function that converts a string to a floating-point number.
// // Example: "2.454" → 2.454
// let str = "32.321";

// console.log(parseFloat(str))
// 5. Parse a string to an integer
// Example: "55" → 55
// let num = "55"
// console.log(parseInt(num))
// 6. Write a function that checks if a given value is NaN (Not-a-Number)
// Example: "ereferf" → true, "23" → false
// function func (value){
//     if(Number(value)){
//         return false
//     }
//     else return true
// }

// console.log(func("asfdf"))
// 7. Calculate the sum of the digits of a given number.
// Example: 123 → 6
// let sum = 0;
// function sumDigitNum(number){
//     let num = String(number);
//     for(i = 0; i<num.length;i++){
//         // console.log(num[i])
//         sum+=parseInt(num[i]);
//     }
//     return sum
// }

// console.log(sumDigitNum(423424))
// 8. Find the number of digits in a given number.
// Example: 1234 → 4

// function findNum(number){
//     var givenNumber = 123179034;
//     var numStr = String(number);
//     for(i = 0;i<numStr.length;i++){
//         if(givenNumber.toString().includes(numStr)){
//             return true
//         }
//         else return false
//     }
// }

// console.log(findNum(2))
// 9. Find the sum of array items
// Example: [1, 3, "5"] → 9
// let str = "ddada"
// let arr = [1,23,54, '12'];
// let sum = 0;
// for (i = 0;i<arr.length;i++){
//     if(typeof arr[i] == "string"){
//         sum+=Number(arr[i])
//     }
//     else  sum+=arr[i];
// }
// console.log(sum);
// 10. Write a function that rounds a given decimal number to the nearest integer.
// Example: 3.12 → 3

// let num = 3.45647464

// console.log(num.toFixed(0))