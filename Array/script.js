
// let numbers = [1,2,3]
// numbers.forEach((item, index, array) => {
//     console.log(item + 2 , index , array);
// })


// //even
// const nums = [ 10, 15 , 23 , 45 , 22 , 16]
// let even_nums = nums.filter((nums) => {return nums%2 == 0})
// console.log(even_nums);



// //uppercase
// const fruits = [ 'Apple' , 'pomegranate' , 'Grapes']
// const uppercase_fruits = fruits.map((fruits) => fruits.toUpperCase())
// console.log(uppercase_fruits)



// //extract item names from this array
// const items = [
//     {name : "Bike", price:100000},
//     {name : "Car", price:1000000},
//     {name : "Iphone", price: 150000}
// ]
// const itemnames = items.map((item) => item.name)
// console.log(itemnames)
// const itemprice = items.map((item) => item.price)
// console.log(itemprice)



// //upto 2 decimal
// const raw_prices = [ 22.443 , 44.555 , 90.9099]
// const prices = raw_prices.map((price)=> price.toFixed(2))
// console.log(prices.map(price => "₹" + price));



// //find()
// const students = [
//     {name: "Sushank", grade:80},
//     {name: "Rahul", grade:90},
//     {name: "Raj", grade:30},
//     {name: "Rashmi", grade:60}
// ]
// const topstudents = students.find((student) => student.grade > 50)
// console.log(topstudents)




// //every()
// const numbers1 = [55, 80, 90 , 68]
// const all_above_50 = numbers1.every((number) => number > 50)
// console.log(all_above_50)




//sort()
// const numbers2 = [ 10, 5, 7, 8, 9]
// numbers2.sort((a, b) => a - b)
// console.log(numbers2)