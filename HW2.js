"use strict";

// // let username = prompt("Имя пользовател");
// // let password ='';


// // console.log(username.toLocaleLowerCase());

// // if (username =="admin") {
// //     password = prompt("Введи пароль");}
// //     else if (username == null){
// //         alert('Вход отменён');
// //     }else {
// //         alert('Пользователь не найден');
// //     }

// // if (password == 123321){
// //     alert('Добро пожаловать!');
// //     }else if(password == null){
// //     alert("Вход отменён");
// //     }else {
// //         alert('Пароль неверен');
// //     } 
    ////////////////////////////////////////////////////
// // let age = prompt("Сколько лет", 'от 14-90');

// //     if (age >=14 && age <=90 ){
// //     alert('OK');
// //     } else{
// //     alert('error');
// //     }
///////////////////////////////////////////////////////////
// let number3 =[];
// for ( let i=2; i<=10; i+=2){
//  console.log(i);
//  number3.push(i);
// }
// number1.innerHTML = number3;


// let number4 = [];
// for (  let b=11; b>=1; b-=2){
//     // console.log(b);
//     number4.push(b);
//    }
// number2.innerHTML = number4;
////////////////////////////////
//  let d =[];
//  let c=2;
//  while (c<=11){
//     let g = (`<img src="images/${c-1}.jpg" style="border-style: solid; border-color:green ; width: 100px;">`);
//     let h = (`<img src="images/${c}.jpg" style="border-style: solid; border-color:blue ; width: 100px;">`);
//     c+=2;
//      d.push(g+h);
//     console.log(g);
//     }
// pic.innerHTML= d;

// let  x= prompt("столбцов");
// let y= prompt("строк"); 
let  x= 5;
let y= 5; 

let tab= `<table>`,c=1;


    for ( let i=1; i<=y; i++){

        tab += '<tr>';
            for  (let j=1; j<=x; j++){

                tab +=`<td><a href="link${c}.html">ячейка ${c}</a></td>`;
                c++;
            }

        tab += '</tr>';    
    }
    tab += "</table>";
    tab1.innerHTML =tab;