// *** клас === функція-конструктор

console.log({}.prototype === {}.prototype); // true
// True, тому що літерал {} створює новий екземпляр класу Object,
// а у экземплярів нема такої властивості як prototype
// (єдине виключення - функції створені з ключовим словом function).
// Тому цей вираз маэ такий вигляд undefined === undefined


function sayHello() {};
console.log(sayHello.prototype === sayHello.__proto__); // false
// False, тому що sayHello має ВЛАСНУ властивість prototype.
// sayHello.prototype - поверне власний прототипний об'єкт
// sayHello.__proto__ - це посилання на загальний прототип для всіх функцій - Function.prototype


function sayHello1() {};
function sayGoodBye() {};
console.log(sayHello1.__proto__ === sayGoodBye.__proto__); // true
// True, тому що sayHello1.__proto__ і sayGoodBye.__proto__ це посилання на Function.prototype
console.log(sayHello1.prototype === sayGoodBye.prototype); // false
// False, тому що в цьому випадку sayHello.prototype та sayGoodBye.prototype різні об'єкти.
// sayHello та sayGoodBye мають свої власні властивості prototype


let arrowFunc = () => {};
console.log(arrowFunc.prototype === Object.prototype); // false
// False, тому що arrow функції НЕ мають властивості prototype


let age = 22;
console.log(age.prototype === Number.prototype); // false
// False, тому що age, екземпляр класу Number, і він не має властивості prototype
console.log(age.__proto__ === Number.prototype); // true
// True, тому що age.__proto__ це посилання на прототип класу Number (Number.prototype)


function Test() {}
console.log(Test.__proto__ === Function.prototype); //true
// Test.__proto__ це посилання на Function.prototype

let num = 77;
console.log(num.__proto__ === Number.prototype) // true
// num.__proto__ це посилання на Number.prototype
