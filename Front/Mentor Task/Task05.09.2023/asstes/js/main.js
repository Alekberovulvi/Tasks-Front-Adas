//task1

// let txt = "Hello World."

// console.log(txt.indexOf("."))


//Task 2

// let groupmate = ["Murad", "Tamerlan", "Ulvi"]

// groupmate.push("Ulvi5")

// groupmate.shift()

// console.log(groupmate);


//task 3

// let text = '32, 31, 34, 36, 31'

// console.log(text.replace(/,/g,";"))


//task 4

// let arr = [1,2,3,4,5,6,7,8,9,10] 

// let firstarr = arr[0];
// let secondarr = arr[1];

// let newarr = arr.slice(2);

// console.log(firstarr);
// console.log(secondarr);
// console.log(newarr);

//task 5 

// let arr = [1, 2, 3, 4, 5]

// let newarr = arr.map(item => {
//     return item * 2
// })

// console.log(arr , newarr)


//task 6

// let price = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22]

// let newprice = price.sort(function(a,b){
//     return a - b 
// })

// let pricefilter = newprice.filter((item)=>{
//     return item>0 
// })

// console.log(pricefilter);



//task 7 

// let number = [2, -5, 10, -7, 3, -8, 1];

// function negativenum(array){
//     let result = []
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]<0){
//             result.push(array[i])
//         }        
//     }

//     return result
// }

// console.log(negativenum(number))


//task 8

// let text = "Hello-World";

// let kebabtoUpper = function(txt){
//     let newText = txt.replaceAll('-', "_")
//     return newText.toUpperCase()
// }

// console.log(kebabtoUpper(text))

//task 9 

// let arr = [2,42,134,21,454,123,21];

// let sortarr = arr.sort(function(a,b){
//     return a- b
// })

// console.log(sortarr[sortarr.length-2])