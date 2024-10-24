


//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

const string = 'hello world';
const string1 = 'lorem ipsum';
const string2 = 'javascript is cool';
console.log(string.length);
console.log(string1.length);
console.log(string2.length);


//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'

const upCa = 'hello world ,lorem ipsum ,javascript is cool';
console.log(upCa.toUpperCase());


//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const lowCase = 'HELLO WORLD, LOREM IPSUM, JAVASCRIPT IS COOL';
console.log(lowCase.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

function print(n) {
    console.log(n);
    if (n > 0) {
        print(n - 1);
    }

}
print(5);

let string111 = ' dirty string   ';
let clStr = string111.replaceAll(' ', ' ');
console.log(clStr);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToarray(str) {
    return str.split('');
}

let strttttt = 'Ревуть воли як ясла повні';
let arr11 = stringToarray(strttttt);
console.log(arr11);

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.


const arrBig = [10,8,-7,55,987,-1011,0,1050,0];

const toString = arrBig.map(key => String(key));

console.log(toString);

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//
// або навпаки в залежності від значення аргументу direction.
//    let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]
//
//==========================


let nums = [11,21,3];
function sortNum(arr,direction) {
    if(direction === 'asc') {
        return arr.sort((a,b) => a - b);
    }
    else if(direction === 'desc') {
        return arr.sort((a,b) => b - a);
    }
    else {
        return 'Error';
    }
}

console.log(sortNum(nums,'asc'));
console.log(sortNum(nums,'desc'));

//- є масив
//let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];
//-- відсортувати його за спаданням за monthDuration
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
 {title: 'JavaScript Complex', monthDuration: 5},
 {title: 'Java Complex', monthDuration: 6},
 {title: 'Python Complex', monthDuration: 6},
 {title: 'QA Complex', monthDuration: 4},
 {title: 'FullStack', monthDuration: 7},
 {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration));

const result = coursesAndDurationArray.filter(month => month.monthDuration > 5);
console.log(result);

let changeArr = coursesAndDurationArray.map((coursesAndDurationArray,index)=>
({title: coursesAndDurationArray.title, monthDuration: coursesAndDurationArray.monthDuration, id:index +1}));
console.log(changeArr);


//=========================
//    описати колоду карт (від 6 до туза без джокерів)
//- знайти піковий туз
//- всі шістки
//- всі червоні карти
//- всі буби
//- всі трефи від 9 та більше
//
//{
//    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//    color:'', // 'red','black'
//}
//
//=========================
//
//    Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//{
//    spades:[],
//        diamonds:[],
//    hearts:[],
//    clubs:[]
//}
//=========================
//    взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//--написати пошук всіх об'єктів, в який в modules є sass
//--написати пошук всіх об'єктів, в який в modules є docker

let userses = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const findAge = userses.filter(user => user.age < 29 || user.status===true);
console.log(findAge);

