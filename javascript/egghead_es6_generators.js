function* greet() {
    console.log("Generator start");
    yield 'First';
    console.log("Generator next");
    yield 'Second';
    console.log("Generator next");
    yield 'Third';
    console.log("Generator next");
    yield '4';
    console.log("Generator next");
    yield '5';
}

var greeter = greet();
// console.log(greeter.next());
// console.log(greeter.next());
// console.log(greeter.next());
// console.log(greeter.next());
// console.log(greeter.next());
// console.log(greeter.next());

for (let word of greeter) {
    console.log(word);
}


function* greet2() {
    let friendly = yield 'How';
    friendly = yield friendly + 'are';
    yield friendly + "you";
}

var g2 = greet2();
console.log(g2.next().value);
console.log(g2.next(" the heck ").value);
console.log(g2.next(" bla bla ").value);


function* graph() {
    let x = 0;
    let y = 0;
    while(true) {
        yield {x, y};
        x+=2;
        y+=1;
    }
}
var gGenerator = graph();
console.log(gGenerator.next());
console.log(gGenerator.next());
console.log(gGenerator.next());
console.log(gGenerator.next());