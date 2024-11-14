// task1
// let age = prompt('Введите Ваш возраст')
// if(age <= 2){
//     console.log('Вы ребенок')
// }
// else if( age >= 12 || age <= 18){
//     console.log('Вы подросток')
// }
// else if( age >= 18 || age < 60){
//     console.log('Вы взрослый')
// }
// else if( age >= 60 ){
//     console.log('Вы пенсионер')
// }

//task2
// let numb = Math.abs(
//     Math.trunc(+prompt('от 0 до 9',' 0-9'))
//   )
// switch(numb){
//     case 0:
//         alert(')')
//         break
//     case 1:
//         alert('!');
//         break;
//     case 2:
//         alert('@');
//         break;
//     case 3:
//         alert('#');
//         break;
//     case 4:
//         alert('$');
//         break;
//     case 5:
//         alert('%');
//         break;
//     case 6:
//         alert('^');
//         break;
//     case 7:
//         alert('&');
//         break;
//     case 8:
//         alert('*');
//         break;
//     case 9:
//         alert('(');
//         break;
//     default:
//         alert("ты ничего не ввел");
//         break;
// }


// task3
// let a = prompt("Введите трехзначное целое число: ");
// let arr = a. ("");
// let count = 0;
// if (arr[0] == arr[1]) {
//   count++;
// }
// if (arr[0] == arr[2]) {
//   count++;
// }
// if (arr[1] == arr[2]) {
//   count++;
// }
// if (count == 1) {
//   count++;
// }
// alert(`Обнаружено ${count} одинаковых цифры`)


// task4
// let leap_year1 =  (
//     +prompt("год для проверки на високосность: ")
//   );
//   alert(
//     !(leap_year1 % 400) || (!(leap_year1 % 4) && leap_year1 % 100)
//       ? "Високосный"
//       : "Невисокосный"
//   );


// task5
// let palindrom = 0;
// do {
//   palindrom = Math.abs(
//     +prompt("пятиразрядное число для проверки на палиндром: ")
//   );
// } while (palindrom < 10000 || palindrom > 99999);
// let array = [];
// for (i = 0; i < 5; i++) {
//   array[i] = palindrom % 10;
//   palindrom = Math.trunc(palindrom / 10);
// }
// if (array[0] == array[4] && array[1] == array[3]) {
//   alert(" это число палиндром");
// } else {
//   alert(" число не палиндром");
// }


// task6
// let sum = Math.abs(+prompt("Введите сумму USD для обмена: "));
// const eur = Number(0.9);
// const uan = Number(0.2);
// const azn = Number(0.6);
// let rate = "";
// do {
//   rate = prompt(
//     "На какую валюту хочешь обменять доллары?EURна евро, UAN на юани, AZN для азербайджанских манатов."
//   );
//   rate = rate.toUpperCase();
// } while (rate != "EUR" && rate != "UAN" && rate != "AZN");
// let convert_sum = 0;
// if (rate == "EUR") {
//   convert_sum = (sum * eur).toFixed(2);
// }
// if (rate == "UAN") {
//   convert_sum = (sum * uan).toFixed(2);
// }
// if (rate == "AZN") {
//   convert_sum = (sum * azn).toFixed(2);
// }
// alert(`Вы поменяли ${sum} USD на ${convert_sum} ${rate}`);


// task7
// let check_sale = Math.abs(+prompt("сумма покупки: "));
// let discount = Number(0);
// if (check_sale >= 200 && check_sale <= 300) {
//   discount = 3;
//   check_sale = check_sale - (check_sale * discount) / 100;
// }
// if (check_sale > 300 && check_sale <= 500) {
//   discount = 5;
//   check_sale = check_sale - (check_sale * discount) / 100;
// }
// if (check_sale > 500) {
//   discount = 5;
//   check_sale = check_sale - (check_sale * discount) / 100;
// }
// alert(
//   `на сумму ${
//     check_sale / (1 - discount / 100)
//   } рублей. скидка будет ${discount}% - ${
//     ((check_sale / (1 - discount / 100)) * discount) / 100
//   } рублей.к оплате ${check_sale} рублей.`
// )


// task8
// let circuit = +prompt("Введите длину окружности: ");
// let perimeter = +prompt("Введите периметр квадрата: ");
// if (circuit / 2 / Math.PI > perimeter / 4 / 2) {
//   alert("Окружность данной длины не впишется в данный квадрат!");
// } else {
//   alert("Окружность данной длины впишется в данный квадрат!");
// }


// task9
//   alert(
//     "ты парень, тебе 21 год.Ты итишник"
//   );
//   let penalty_counter = Number(0);
//   alert(
//     "Вопрос первый, о твоем возрасте,смотри не проколись"
//   );
//   let question_a = confirm("Ваш возраст старше 100 лет?");
//   let question_b = confirm("Вы уже вышли на пенсию?");
//   let question_c = confirm("До пенсии еще работать и работать!");
//   if (question_c == true) {
//     penalty_counter += 2;
//   }
//   alert("Вопрос второй, касаемо вашего пола. Ну хоть тут не запутайтесь!");
//   question_a = confirm("Вы мужчина?");
//   question_b = confirm("Вы женщина?");
//   question_c = confirm("Вы оно?");
//   if (question_a == true) {
//     penalty_counter += 2;
//   }
//   alert("Кто ты по профессии?");
//   question_a = confirm("Я каменщик третьего разряда");
//   question_b = confirm("Я блоггер из Бердышлы");
//   question_c = confirm("Я благородный синьор!");
//   if (question_c == true) {
//     penalty_counter += 2;
//   }
//   if (penalty_counter > 0) {
//     alert(
//       `не,ну как так то ${(penalty_counter /= 2)} неправильных ответа и ${penalty_counter} штрафных балла!`
//     );
//   } else {
//     alert("А ты все таки отличный итишник! 0 штрафных баллов, поздравляю)");
//   }

// task10

var date = Math.abs(
    Math.floor(Number(prompt("Введите число месяца от 1 до 31: ")))
  ); //ввели дату
  
  var month = Math.abs(
    Math.floor(Number(prompt("Введите порядковый номер месяца от 1 до 12: ")))
  ); //ввели месяц
  
  var year = Math.floor(Number(prompt("Введите год: "))); //ввели год
  
  if (date < 1 || date > 31 || month < 1 || month > 12) {
    date = 1;
    month = 1;
    alert(
      "Вы некорректно указали день либо порядковый номер месяца. Дата автоматически будет сброшена на 1 января. Для повторного ввода данных обновите страницу (клавиша F5)"
    );
  } // исключаем возможность неверной даты, в случае ошибочного ввода, выставляем 1 января
  
  if ((month < 10) & (date < 10)) {
    alert(
      `Вы запросили дату 0${date}.0${month}.${year}, если ошиблись при вводе, обновите страницу`
    );
  } else if ((month > 9) & (date < 10)) {
    alert(
      `Вы запросили дату 0${date}.${month}.${year}, если ошиблись при вводе, обновите страницу`
    );
  } else if ((month < 10) & (date > 9)) {
    alert(
      `Вы запросили дату ${date}.0${month}.${year}, если ошиблись при вводе, обновите страницу`
    );
  } else {
    alert(
      `Вы запросили дату ${date}.${month}.${year}, если ошиблись при вводе, обновите страницу`
    );
  }
  
  var leap_year = Number(0); //вводим переменную для учета високосного года
  
  if ((year % 4 == 0) & (year % 100 != 0) || year % 400 == 0) {
    leap_year = 1;
    alert("Введенный вами год является високосным по григорианскому календарю");
  } //проверили условие на високосный год, если оно выполнено, выводим об этом сообщение
  
  var new_date = date; // новая переменная для следующего числа месяца
  
  var new_month = month; // новая переменная в случае наступления нового месяца
  
  var new_year = year; // новая переменная в случае наступления нового года
  
  new_date += 1; // меняем текущую дату на последующую
  
  if ((new_date > 30) & (month == 4 || month == 6 || month == 9 || month == 11)) {
    new_date = 1;
    new_month += 1;
  } //делаем переход на след.мес. в апреле, июне, сентябре, ноябре
  
  if (
    (new_date > 31) &
    (month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10)
  ) {
    new_date = 1;
    new_month += 1;
  } //делаем переход на след. мес. в январе, марте, мае, июле, августе, октябре и декабре
  
  if ((new_date > 31) & (month == 12)) {
    new_date = 1;
    new_month = 1;
    new_year += 1;
  }
  
  if ((new_date > 28) & (month == 2) & (leap_year == 0)) {
    new_date = 1;
    new_month = 3;
  }
  
  if ((new_date > 29) & (month == 2) & (leap_year == 1)) {
    new_date = 1;
    new_month = 3;
  }
  
  if ((date > 30) & (month == 4 || month == 6 || month == 9 || month == 11)) {
    date = 0;
  } //проверяем, что в апреле, июне, сентябре, ноябре, текущая дата не превышает 30 дней, если такое произошло - обнуляем дату
  
  if (
    (date > 31) &
    (month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12)
  ) {
    date = 0;
  } //проверяем, что в январе, марте, мае, июле, августе, октябре и декабре текущая дата не превышает 31 день, если такое произошло - обнуляем дату
  
  if ((date > 28) & ((month == 2) & (leap_year == 0))) {
    date = 0;
  } //проверяем, чтобы в високосном году не ввели 30 февраля, обнуляем дату
  
  if ((date > 29) & ((month == 2) & (leap_year == 1))) {
    date = 0;
  } //проверяем, чтобы в невисокосном году не ввели 29 февраля, обнуляем дату
  
  if (date == 0) {
    alert("Вы ввели некорректную дату, обновите страницу и попробуйте снова");
  } else {
    if ((new_month < 10) & (new_date < 10)) {
      alert(`Следующая дата 0${new_date}.0${new_month}.${new_year}`);
    } else if ((new_month > 9) & (new_date < 10)) {
      alert(`Следующая дата 0${new_date}.${new_month}.${new_year}`);
    } else if ((new_month < 10) & (new_date > 9)) {
      alert(`Следующая дата ${new_date}.0${new_month}.${new_year}`);
    } else {
      alert(`Следующая дата ${new_date}.${new_month}.${new_year}`);
    }
  }