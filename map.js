const numbers = [2,8,4,6,3]




function getDoubles(numbers){
    const output=[];

    for(const number of numbers){
        const doubled = doubleIt(number);
        output.push(doubled);
    
    }

    return output;

}

// function doubleIt(number){
//     return number * 2;
// }

const doubleIt = number => number * 2;


const MakeDouble = numbers.map(doubleIt);
const MakeDoubleDirect = numbers.map(num => num * 2)
const MakeDouble2 = numbers.map(x => x*2)

console.log(MakeDouble2);
console.log(MakeDoubleDirect);


const fiveTimes = [1,2,3,4,5].map(x => x*5);
console.log(fiveTimes);


const result = getDoubles(numbers);


console.log(result);
console.log(MakeDouble);