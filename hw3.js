//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
    //- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
    //- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
    //- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let users = [
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

for (let i = 0; i < users.length; i++) {
    document.write(`<div class="user">
                         name: ${users[i].name}
                         <h2>age: ${users[i].age}</h2>
                         <h1>index:${i+1}</h1>
                         </div>`);

}

//- Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Масив:
//
//    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
//ШАБЛОН:
//    <ul>
//        <li>ITEM OF ARRAY</li>
//        <!--
//            і тд інші об'єкти масиву
//             ...
//             ...
//             ...
//        -->
//    </ul>
//
//замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву


