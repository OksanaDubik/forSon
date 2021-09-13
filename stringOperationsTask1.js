let name = prompt("ваше имя");

function sayHello(name) {
    let result = `Добрый день, ${name}!`;
    console.log(result);
    return result;
}

sayHello(name);