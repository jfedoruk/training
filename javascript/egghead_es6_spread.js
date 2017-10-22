var first = [1, 2, 3];
var second = [4, 5, 6];

first.push(second);

console.log(first);

first = [1, 2, 3];
first.push(...second);
console.log(first);

function addThree(a, b, c) {
    let result = a + b + c;
    console.log(result);
}

addThree(...first);
addThree(...second);
