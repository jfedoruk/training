var greeting = function(name, fname) {
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

fs.forEach(function(f) {
    f();
});

fs2.forEach(function(f) {
    f();
});


