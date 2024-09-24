

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250



//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function fooPl(a,b) {
return a * b;
}
console.log(fooPl(5, 3));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

function SumSide(r) {
    return Math.PI * r *r;
}
console.log(SumSide(5));




//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function SumCil(r) {
    return 2 * Math.PI * r ** 2;
}
console.log(SumCil(2));

//- створити функцію яка приймає масив та виводить кожен його елемент
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

function UserKey(fofofof) {
    for (const argument of fofofof) {
        for (const argumentKey in argument) {
            document.write(argument[argumentKey]);
            }
    }
}

UserKey(userses);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text) {
    return `<p>${text}</p>`;

}
const paragraph = createParagraph('Everything will be good');
document.write(paragraph);


//- створити функцію яка створює ul з трьома елементами li. 
// Текст li задати через аргумент всім однаковий
function createLiUl(text) {
    return `<ul>
             <li>${text}</li>
             <li>${text}</li>
             <li>${text}</li>             
             </ul>`;
}

const writeLiUl = createLiUl('Everything will be better tomorrow');
document.write(writeLiUl);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function creatLiUl(text, count) {
   let ul = '<ul>';
   for (let i = 0; i < count; i++) {
       ul += `<li>${text}</li>`;
   }
 ul += '</ul>';
   return ul;
}

const list= creatLiUl('Everything will be better tomorrow', 10);
document.write(list);

//- створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список

function createArray(array) {
    let ul1 = '<ul>';

    for (let i = 0; i < array.length; i++) {
        ul1 += `<li>${array[i]}</li>`;
    }
    ul1 += '</ul>';

    return ul1;
}

const list2 = createArray([123,'Hello', true]);
const list3 = createArray([678, 'How are you', false]);
document.write(list2,list3);


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
function arrProd(array) {
     let div = '<div>';

     for (let i = 0; i < array.length; i++) {
         div += `<p>${array[i]}</p>`;
     }
    div += '</div>';

   return div;
}

const hello = arrProd([1, 'yuliia', 22]);
const hello2 = arrProd([33, 'HOHOHI', 24]);
document.write(hello, hello2);


//- створити функцію яка повертає найменьше число з масиву

function maxNum(arr) {
     let min = 0;
     let max = 0;

     for (let i = 0; i < arr.length; i++) {
         if (arr[i]<min){
             min= arr[i];
         }
         else if (arr[i]>max){
             max= arr[i];
         }
     }
     return max;
}
 let result = maxNum([12, 10, 5, 765]);
console.log(result);


//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та
// повертає його.
// Приклад sum([1,2,10]) //->13
function sumNum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumNum([12, 10, 5, 7]));




//- створити функцію swap(arr,index1,index2).
// Функція міняє місцями значення у відповідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function chanDir(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}


    console.log(chanDir([11,44,99,77],1,2));




//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

