// const age_1 = 10;
// const age_2 = 18;
// const age_3 = 60;

// if(age_1 < age_2){
//     console.log('You do not have access cause your age is ' + age_1 + ' It is less then ' + age_2)
// } else if (age_1 >=age_2 && age_1 < age_3){
//     console.log('Welcome')
// } else if (age_1 >= age_3){
//     console.log('Keep calm and watch Culture channel')
// } else{
//     console.log('Technical work')
// }














// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61








// //const age_1 = 10 нам уже не нужно, т.к. мы заменили на age в функции
// const age_2 = 18;
// const age_3 = 60;


// //Заменяем age_1 на просто age

// const checkAge = function(age){
//     if(age < age_2){
//         console.log('You do not have access cause your age is ' + age + ' It is less then ' + age_2)
//     } else if (age >=age_2 && age < age_3){
//         console.log('Welcome')
//     } else if (age >= age_3){
//         console.log('Keep calm and watch Culture channel')
//     } else{
//         console.log('Technical work')
//     }
// }
// checkAge(17)
// checkAge(25)
// checkAge(90)

















// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции
// проверялся тип данных. И если он не Number - кидалась ошибка.




// const age_2 = 18;
// const age_3 = 60;

// const checkAge = function(age){
//     if (typeof age == 'number') {
//     if(age < age_2){
//         console.log('You do not have access cause your age is ' + age + ' It is less then ' + age_2)
//     } else if (age >=age_2 && age < age_3){
//         console.log('Welcome')
//     } else if (age >= age_3){
//         console.log('Keep calm and watch Culture channel')
//     } else{
//         console.log('Technical work')
//     }
// } else {console.log("Error")
// }
// }
// checkAge ("dsadasd")
// checkAge(1)
// checkAge(85)










// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' 
//(строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось,
// преобразовываясь в number



// // age = Number(age) - преобразовываем для того, 
// //чтобы значениям переменной "age" присваивались значения в форме "number"



// const age_2 = 18;
// const age_3 = 60;

// const checkAge = function(age){

// // вот сюда впишем преобразование всех значений "age" в их "number"


//  age = Number(age)

//     // if (!isNaN(age)) 
//     // if (Number(age))
//     // if (+(age)) это всё одна и та же функция))
    
//     if (+(age)) {
//     if(age < age_2){
//         console.log('You do not have access cause your age is ' + age + ' It is less then ' + age_2)
//     } else if (age >=age_2 && age < age_3){
//         console.log('Welcome')
//     } else if (age >= age_3){
//         console.log('Keep calm and watch Culture channel')
//     } else{
//         console.log('Technical work')
//     }
// } else {console.log("Error")
// }
// }
// checkAge (17)
// checkAge('-22')
// checkAge('22dd')

















// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке







//создал файл .html, в нём зажал Шифт, ! и Таб (создалось тело),
// потом дописал скрипт <script src="./(название файла этого)"> и закрыть скрипт </script>
//потом нажал пкм на файл .html и выбрал "open with live server "





const age_2 = 18;
const age_3 = 60;

const checkAge = function(age){

age = Number(age)

    
    if (+(age)) {
    if(age < age_2){
        console.log('You do not have access cause your age is ' + age + ' It is less then ' + age_2)
    } else if (age >=age_2 && age < age_3){
        console.log('Welcome')
    } else if (age >= age_3){
        console.log('Keep calm and watch Culture channel')
    } else{
        console.log('Technical work')
    }
} else {console.log("Error")
}
}
checkAge (17)
checkAge('-22')
checkAge('22dd')

//дописываем в JS-файле  let agePrompt = prompt('Enter age')
//и добавляем привязку проверки возраста

let agePrompt = prompt('Enter age')
checkAge (agePrompt)