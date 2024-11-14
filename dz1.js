// 1task

// const name = prompt('привет,как тебя зовут?')
// alert('Привет ' + name)


// task 2
// const year = 2024
// let birthYear = prompt('В каком году ты родился?')
// let age = year - birthYear
// alert(age)

// task3
// let square = prompt('Какая длина стороны кватрата',)
// let p = 4 * square
// alert(p)


// task3
// const pi = 3.14
// let around = prompt('Какой радиус окружности?',)
// let s = 3.14 * Math.pow(around,2)
// alert(s)


// task4

// let km = prompt('Расстояние до Уфы в км?')
// let hr = prompt('За какое время хочешь добраться (в км)?')
// let kmh = km / hr
// alert(kmh + ' км\ч')


// task6

// let dollar = prompt('введи доллар получишь евро')
// let euro = dollar * 0.9
// alert(euro)


// task7
// let gb = prompt('сколько гб на флешке,столько влезет этих файлов')
// let mb = gb * 1024
// let sht = mb / 820
// alert(sht)


// task8

// let sum = prompt("Cколько у вас в бумажнике денег? ");
// let price = prompt("И почем одна шоколадка? ");
// sum = Number(sum);
// price = Number(price);
// let sell = Math.trunc(sum / price);
// let change = sum - price * sell;
// if (sell < 1) {
//   alert('Сегодня вы на нуле. приходите в другой раз');
// }
// else {
//   alert('вот твои ' + sell + ' шоколадки, и' + (sum - price * sell) + ' сдачи ');
// }


//task9
// number = prompt('Введите трехзначное число: ');
// let a = Number(number % 10);
// let b = Number((number - a) / 10 % 10);
// let c = Number((number - a - b * 10) / 100);
// alert('Перевертыш: ' + (a * 100 + b * 10 + c));


//task10

let a = prompt('Введите число для проверки на четность: ');
a = Number(a);
alert((parseInt(a) % 2 == 0) ? "ЧЁТНОЕ" : "НЕЧЁТНОЕ");