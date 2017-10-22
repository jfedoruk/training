var greeting = function (name, fname) {
    return name + fname;
};

var greetingArrow = (name, fname) => name + fname;
var message = msg => msg;

// console.log(greeting("k", "f"));
// console.log(greetingArrow("k", "f"));
// console.log(message("k"));

var fs = [];
var fs2 = [];

for (var i = 0; i < 5; i++) {
    fs.push(function () {
        console.log(i);
    })
}

for (let i = 0; i < 5; i++) {
    fs2.push(function () {
        console.log(i);
    })
}

fs.forEach(function (f) {
    f();
});

fs2.forEach(function (f) {
    f();
});


function defaultParams(name, surname = 'Doe') {
    console.log(name + ' ' + surname);
}

defaultParams();

function test_arrow(complete = () => console.log("complete")) {
    complete()
}

test_arrow();

let firstName = 'John';
let lastName = 'Doe';

let person = {firstName, lastName};
console.log(person);

let mascot = 'Fluffy';

let team = {person, mascot};

console.log(team);

function go() {
    console.log("go");
}

var team2 = {
    person,
    mascot,
    go
};

console.log(team2);

team2.go();

var funcName = "go";

var team3 = {
    person,
    mascot,
    [funcName]: function () {
        console.log("whoa");
    }
};

team3.go();

var sal = "Hello";
var greet = `${sal} world`;

console.log(greet);

var x = 1;
var y = 2;

console.log(`${x} + ${y} = ${x + y}`);

function parse(strings, ...values) {
    console.log(strings);
    console.log(values);

    values[1] = "was parsed";

    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

var message = parse`It's ${new Date().getHours()} and ${""}`;

console.log(message);

function generateObj() {
    return {
        color: "blue",
        name: "john",
        state: "ny"
    }
}

var {color:kolor, state:sztejt} = generateObj();
console.log(`${kolor}  ${sztejt}`);

var [first, , , fourth] = ["first", "second", "third", "fourth elem"];

console.log(first);
console.log(fourth);



function Store() {
    var aisle = {
        fruit: [],
        vegetalbe: []
    }
    return {
        //Store().add('category', 'item1', 'item2');
        add: function(category, ...items) {
            //var items = [].splice.call(arguments, 1);
            console.log(items);
            items.forEach(function(value, index, array) {
                aisle[category].push(value);
            });
        },
        aisle: aisle
    }
}

var myGroceryStore = new Store();

myGroceryStore.add('fruit', 'apples', 'oranges');
console.log(myGroceryStore.aisle);