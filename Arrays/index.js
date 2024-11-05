// Task1

const arr = [3, 4, 64, 354, 'N', 9]
// function removeItem(arr){

//     arr.pop()
//     return arr
// }

// const newArr = console.log(removeItem(arr))
// console.log(newArr)

// Task2

// function lengthArray(arr){
//     return arr.length

// }

// let len = lengthArray(arr)
// console.log(len)

// Task3

// function addToArray(arr,data){
//     arr.push(data)
//     return arr
// }

// console.log(addToArray(arr,"Nizami"))

//Task4

// function addToArray(arr,data){
//     arr.unshift(data)
//     return arr
// }

// console.log(addToArray(arr,"Nizami"))


// Task5

// const arr2 = ['Nizami', 'Amirov', 'StepIT', 'BsTu']

// function splitArray(array) {
//    return array.join(",")
// }
// console.log(splitArray(arr2))

// Task6

// function spliceArray(arr,start,end){
//     return arr.slice(start,end)
// }
// console.log(spliceArray(arr,1,3))

//Task7

// function indexOfArr(arr,index){
//     return arr.at(index)
// }
// console.log(indexOfArr(arr,5))

//Task8

// function deleteFromArray(arr,item){
//     const newArr2 = arr.filter(a => a!= item);
//     return newArr2

// }

// console.log(deleteFromArray(arr,'9'))


//Object Tasks


//Task1

// const person = {
//     name:'Nizami',
//     surname : 'Amirov',
//     age: 20
// }

// function convertToArray(person){
//     const keyValuePairs = Object.entries(person)
    
//     return keyValuePairs
// }

// console.log(convertToArray(person))

//Task2

// const fruits = [
//     {name:"Nizami", age:20},
//     {name:"Aksin", age:18},
//     {name:"Revan", age:19},
//     {name:"Ali", age:14},
//     {name:"Tural", age:10},
//     {name:"Amid", age:5},
//   ];

// function MyCallback({age}){
//     return  age > 15 ? 'ok' : 'low'
// }

// const res = Object.groupBy(fruits,MyCallback);
// console.log(res)