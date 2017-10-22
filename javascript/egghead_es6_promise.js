var d = new Promise((resolve, reject) => {
    if (true) {
        resolve('Hello world');
    } else {
        reject('Noooo');
    }
});

d.then((data) => console.log('success: ' + data), (err) => console.log("new err"));

// d.then((data) => console.log('success: ' + data))
//     .catch((err) => console.log("new err"));

//d.catch((err) => console.log('err: ' + err));
