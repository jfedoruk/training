var myMap = new Map();

myMap.set('foo', 'bar');
myMap.set('hello', 'world');

console.log(myMap.get('foo'));

console.log(myMap.size);

console.log(myMap.has('foo'));

console.log(myMap.entries());

for ([key, val] of myMap) {
    console.log(key + ' ' + val);
}