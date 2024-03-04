// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
//
// let multiplyNumeric = (obj) => {
//     for (let key in obj) {
//         typeof obj[key] === 'number' ? obj[key] *= 2 : null;
//         console.log(obj[key])
//     }
// };
//
// multiplyNumeric(menu);
//
// console.log( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );


// let makeUser = () => {
//     return {
//         name: "John",
//         ref(){
//             return this;
//         }
//     };
// }
//
// let user = makeUser();
//
// alert( user.ref().name );

// let calculator = {
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//       return this.a * this.b;
//     },
//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     }
// }
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );



// function Calculator(){
//     this.read = function (){
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     };
//     this.sum = function (){
//         return this.a + this.b;
//     };
//     this.mul = function (){
//         return this.a * this.b;
//     };
// }
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator(n){
//     this.value = n;
//     this.read = function (){
//         this.value += +prompt("Число",1);
//     };
// }
// let accumulator = new Accumulator(1); // начальное значение 1
//
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
//
// alert(accumulator.value); // выведет сумму этих значений

// function usFirst(name){
//     return name[0].toUpperCase() + name.slice(1);
// }
// alert(usFirst("вася"));

// let checkSpam = (str) =>{
//     str = str.toLowerCase();
//     return (str.includes("xxx") || str.includes("viagra") ) ? true : str;
// }
// alert(checkSpam("buy me ViaGRa, pls"));

// let truncate = (str, maxlength) => (str.length > maxlength) ? str.slice(0,maxlength-1) + "..." : str;
//
// alert(truncate("Паша самый крутой!",4));

// let extractCurrencyValue = (str) =>{
//     return +str.slice(1);
// }
// alert(typeof extractCurrencyValue("$120"));

// let styles = ["Джаз","Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length - 1) / 2 )] = "Классика";
// alert(styles.shift());
// styles.unshift("Рэп","Регги");
// alert(styles);



// function sumInput(){
//     let sum = [];
//     while (true){
//         let value = prompt("число",1);
//         if (value === "" || value === null || !isFinite(value)) break;
//         sum.push(+value);
//     }
//     let count = 0;
//     for (let counts of sum){
//         count +=sum;
//     }
//     return count;
//
// }
// alert(sumInput());
//
// let camelize = (str) => alert(str.split('-').map((word,index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join(''));
//
//
// camelize("background-color");
// camelize("-webkit-transition")
// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
//
// alert( filtered ); // 3,1 (совпадающие значения)
//
// alert( arr ); // 5,3,8,1 (без изменений)

// let filterRange = (arr, a, b) => arr.splice(0, arr.length, arr.filter(item => (item >= a && item <= b)));
//
// let arr = [5, 3, 8, 1];
// filterRange(arr, 1, 4);
// alert(arr);


// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// alert( arr );

// let arr = ["HTML", "JavaScript", "CSS"];
// let copySorted = (arr) =>{
//     let arrNew = arr;
//     return arr.concat().sort((a,b)=> a.localeCompare(b));
// }
// let sorted = copySorted(arr);
//
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)
//


// let calculator = (arr) => {
//     sum()
//     {
//         return this.a + this.back()
//     }
//     mul()}
// return this.a + this.btoa(
//
// )
//     }
// }
// function unique(arr) {
//
//     return Array.from(new Set(arr));
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// alert( unique(values) ); // Hare,Krishna,:-O

// function aclean(arr) {
//     let map = new Map();
//
//     for (let word of arr) {
//         // разбиваем слово на буквы, сортируем и объединяем снова в строку
//         let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//         map.set(sorted, word);
//     }
//
//     return Array.from(map.values());
// }
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// alert( aclean(arr) );

// let sumSalaries =(salaries) =>{
//     let sum =0
//     for(let value of Object.values(salaries)){
//         sum += value;
//     }
//     return sum;
//
// }
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
// alert( sumSalaries(salaries) ); // 650

// let count = (obj) => Object.keys(obj).length;
//
// let user = {
//     name: 'John',
//     age: 30
// };
//
// alert( count(user) ); // 2


// let user = { name: "John", years: 30 };
//
// let {name, years: age, isAdmin = false} = user;
//
// alert( name ); // John
// alert( age ); // 30Ф
// alert( isAdmin ); // false

// ////////////////////////////////////////////////////////////////////////////////////////
// function topSalary (salaries) {
//
//     let maxSalary = Math.max(...Object.values(salaries));
//     for (let [name, salary] of Object.entries(salaries)) {
//         if (salary === maxSalary) {
//             return name;
//         }
//     }
// }
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
//
// alert(topSalary(salaries))

// function topSalary(salaries) {
//     return Object.entries(salaries).length
//         ? Object.entries(salaries).reduce((el1, el2) => (el1[1] < el2[1] ? el2 : el1))
//         : null;
// }

// function topSalary(salaries) {
//     let max = 0,
//         nameIfMax = null;
//
//     Object.entries(salaries).forEach(([name, salary]) => {
//         if (salary > max) {
//             max = salary;
//             nameIfMax = name;
//         }
//     });
//
//     return nameIfMax;
// }
/////////////////////////////////////////////////////////////////////////////////////////////////