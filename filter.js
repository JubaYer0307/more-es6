const numbers = [12,5,23,45,11,18,55,9,61,1];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter(num => num % 2==0)

// console.log(even);

const products = [

    {id: 1, name: 'laptop', price: 40000},
    {id: 1, name: 'mobile', price: 50000},
    {id: 1, name: 'watch', price: 30000},
    {id: 1, name: 'tablet', price: 60000}
    
];

const expensive = products.filter( product => product.price > 10000);

console.log(expensive);