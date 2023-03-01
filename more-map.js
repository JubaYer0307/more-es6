const numbers = [12,56,87,44];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3);

// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'To Cruise','Tom Brady', 'Tom Solaiman'];

const firstLetter =  friends.map(friends => friends[0]);
// console.log(firstLetter);

const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

const products = [

    {id: 1, name: 'laptop', price: 40000},
    {id: 1, name: 'mobile', price: 50000},
    {id: 1, name: 'watch', price: 30000},
    {id: 1, name: 'tablet', price: 60000}
    
];

// const items = products.map(products => console.log(products.name));

const items = products.map(product => product.name);

const prices = products.map(p => p.price);
// console.log(items);
console.log(prices);
