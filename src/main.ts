import './style.css'

//                 // Степень       

// // let input = parseInt(prompt('Введите число', '10') as string)
// // alert(`U pass ${input}, in second degree it's 100`) 



//                 // Имя

// // let name = prompt('Как вас зовут', '');

// // alert('Ваше имя ' + name)


//                     //    Степень

// // let input=parseFloat(prompt('Введите число') as string)
// // let input2=parseFloat(prompt('Введите степень') as string)
// // alert( input ** input2 );

//                         //   Который час

// let input=parseFloat(prompt('Текущий час') as string)
// let input2=parseFloat(prompt ('Текущие минуты') as string)
// let h=parseInt(`${(1440-input*60-input2)/60}`)
// alert(`до следующего дня осталось ${h} часов ${60-(input2)} минут`)



// let company = prompt('Какое официальное название JavaScript?', '');

// if (company == 'Netscape') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? ECMAScript!');
// }

// let value = prompt('Введите число', 0);

// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }



// let accessAllowed;
// let age = prompt('Сколько вам лет?', '');

// if (age > 22) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

const number = +prompt('Введите число между 0 и 2', '');

switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 1');
    break;

  case 2:
    alert('Вы ввели число 2');
    break;

  case 3:
      alert('Введите число между 0 и 2, не больше')
      break;
}