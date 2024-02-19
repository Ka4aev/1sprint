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
