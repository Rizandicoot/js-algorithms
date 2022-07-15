// Question 1 - Calculating area of a triangle

const h = prompt('Enter triangle height')
const w = prompt('Enter Triangle width')
// const areaT = height*width*0.5

console.log(`Area of Triangle is ${areaT(h, w)}`)

function areaT(a, b) {
    return (a * b) / 2;
}


//Question 2 - 
const square = (n) => n**2;
const cubed = (n) => n**3;
const powered = (n, b) => n**b;
console.log(square(5))
console.log(cubed(5))
console.log(powered(5, 4))


// Question 3
const answer = (leapYear) => {
    result = (leapYear % 4 == 0 );
    return result ? `${leapYear} is a leap year`: `${leapYear} is not a leap year`;
};
console.log(answer(2000));
console.log(answer(2001));
console.log(answer(2004));