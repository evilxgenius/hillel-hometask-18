1. Створити окремий файл
2. Проставити true || false навпроти кожного console.log
3. Під кожним console.log() - написати в коментарях пояснення

```javascript
console.log({}.prototype === {}.prototype);

function sayHello() {};
console.log(sayHello.prototype === sayHello.__proto__);

function sayHello() {};
function sayGoodBye() {};
console.log(sayHello.__proto__ === sayGoodBye.__proto__);
console.log(sayHello.prototype === sayGoodBye.prototype);

let arrowFunc = () => {};
console.log(arrowFunc.prototype === Object.prototype);

let age = 22;
console.log(age.prototype === Number.prototype);
console.log(age.__proto__ === Number.prototype);

function Test() {}
console.log(Test.__proto__ === ?);

let num = 77;
console.log(num.__proto__ === ?)
```
