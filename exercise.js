function repeatHello(callback) {
    let int = setInterval(callback, 1000);
    setTimeout(() => clearInterval(int), 5000);
}

repeatHello(() => console.log('Hello'));
