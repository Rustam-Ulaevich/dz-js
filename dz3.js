//1 task
// let a=prompt("введите диапазон")
// let n=prompt("введите диапазон")
// let sum=0; 
// while(a<n){
//     a++;
//     sum+=a;    
// }
// alert(sum)

//2 task
// let numb1 = prompt('Введите первое число');
// let numb2 = prompt('Введите второе число');
// let numb3;
// calc(numb1, numb2)
// alert('наибольший общий делитель чисел ' + numb1 + ' и ' + numb2 + ' будет: ' + numb3)

// function calc(a, b) {
//   let c;
//   while (a != b) {
//     if (a > b) {
//       a = a - b;
//   } else
//     if (a < b) {
//       c = a;
//       a = b;
//       b = c;
//     }
// }
//   return numb3 = a
// }

//3 task
// let n = prompt("Введите число");
// let new_n = Math.abs(n);
// let divisors = "";
// let i = 1;
// do {
//     if (new_n % i == 0) {
//       divisors += i + ",";
//     }
//     i++;
// } while (i <= new_n){
//   alert(`У числа ${n} следующие делители: ${divisors}`);
// }

//4 task
// let n = Math.abs(+prompt("Введите число: "));
//   let counter = 0;
//   while (n > 0) {
//     n = Math.trunc(n / 10);
//     counter++;
//   }
//   alert(`В введенном вами числе ${counter} цифр.`);

//5 task
// let n = 0;
// let number1 = 0;
// let number2 = 0;
// let number3 = 0;
// let number4 = 0;
// let number5 = 0;
// for (let i = 0; i < 10; i++) {
//     n = prompt("Введите число: ");
//     if (n > 0) {
//       number1 += 1;
//     } else if (n < 0) {
//       number2 += 1;
//     } else {
//       number3 += 1;
//     }
//     !(n % 2) ? (number4 += 1) : (number5 += 1);
//   }
//   alert(
//     `Из 10 введеных вами чисел ${number1} положительных, ${number2} отрицательных, ${number3} равных нулю, ${number4} четных и ${number5} нечетных.`
//   );


//6 task
// let result = true;  
// function Calc() {
//     //console.log(typeof a);
//         if(c==1){
//             return a+b;
//         }
//         else if(c==2){
//             return a-b;
//         }
//         else if(c==3){
//             return a*b;
//         }
//         else if(c==4){
//             return a/b;
//         }
//         else{
//             alert("ошибка")
//         }
//     }
//     function StartCalc(){
//         //console.log(typeof a);
//         a = +prompt("введите первое число");
//         b = +prompt("введите второе число");
//         c = +prompt("введите оператор 1-плюс, 2-минус, 3-умножение, 4-деление");
//         //console.log(typeof a);
//         alert(Calc());
//     result = confirm("Хотите выполнить еще одну математическую операцию?");
//     } 
//     StartCalc()
//     while (result == true);
//7 task
// let str = prompt("Введите число!");
// let k = prompt("На сколько цифр его сдвинуть?");
//  console.log(str.substring(k) + str.substring(0, k));

//8 task
// let arr_Week = [
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//     "Воскресенье",
//   ];
//   let i = 0;
//   let stop = true;
//   while (stop == true) {
//     stop = confirm(`${arr_Week[i]}. Хотите увидеть следующий день недели?`);
//     i++;
//     if (i > 6) {
//       i = 0;
//     }
//   }
//   alert("Вывод дней недели окончен!");

//9 task
// let table = "";
//   for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//       table += `${i} x ${j} = ` + i * j + ", ";
//     }
//   }
// alert(table);

//10 task
let N = 0;
  do {
    N = Math.trunc(
      +prompt("Введите целое число в диапазоне от 0 до 100 включительно: ")
    );
  } while (N < 0 || N > 100);
  alert(`Итак, будем играться с числом ${N}.`);

  let counter = 0; // счётчик попыток угадать число
  let low = 0; // нижняя граница диапазона разбиения
  let middle = 0; // середина разбиения диапазона
  let high = 100; // верхняя граница разбиения диапазона
  let condition = ""; // отклик пользователя =, <, > на предложенный вариант числа, пока что просто пустая строка

  while (low <= high) {
    middle = Math.trunc((low + high) / 2);
    condition = prompt(
      `Вы загадали число ${middle}? Введите без кавычек "=", если это так. В противном случае, если искомое число меньше, введите "<", либо же ">", если оно больше. Опять же, без кавычек.`
    );
    // это был отклик пользователя

    if (condition != "=" && condition != "<" && condition != ">") {
      alert(
        "Вы вводите посторонние символы, я вас не понимаю! Будьте внимательнее!"
      );
      continue;
      // здесь исключаем ввод опечаток
    }
    if (
      (condition != "=" && middle == N) ||
      (condition == "<" && middle < N) ||
      (condition == ">" && middle > N) ||
      (condition == "=" && middle != N)
    ) {
      alert(
        `Кто-то мухлюет! Знак "${condition}" здесь совсем неуместен! Попробуйте снова!`
      );
      continue;
    } // здесь исключаем ложь в ответах
    if (condition == ">") {
      low = middle + 1;
    } else if (condition == "<") {
      high = middle - 1;
    } else {
      low = high + 1;
    }
    counter++;
  }
  alert(
    `Итак, за ${counter} попыток бинарным поиском мы установили, что вы загадали число ${middle}!`
  );