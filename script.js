//Дано масив з елементами різних типів. Створити функцію яка вираховує
//середнє арифметичне лише числових елементів даного масиву.

function averageVal(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
 }

var result = [];
var array = [1, 2, "do", "win", "lose", 3];

array.forEach(function(item) {
  if (!isNaN(parseFloat(item)) && isFinite(item))
    result.push(item)
});
console.log(result);
console.log(averageVal(result));




// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ). Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
    if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) return 'Помилка';
    return eval(x + znak.replace('^', '**') + y)
  }
  const x = prompt('Введіть x');
  const y = prompt('Введіть y');
  const znak = prompt('Введіть знак');
  alert(doMath(x, znak, y))




// Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

const mainN = prompt('Введіть довжину основного масиву');
const subN = prompt('Введіть довжину внутрішніх масивів');
const arr = new Array(+mainN).fill(0)
  .map((_, ind) =>
    new Array(+subN).fill(0).map((_, i) => prompt(`Введіть елемент ${i} в підмасиві ${ind}`)));
alert('Ваш масив:' + arr.map(subArr => '\n' + subArr));




// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

function replace_string(string, pattern){
    var st_pt = pattern.join('');

    return string.replace(new RegExp(`[${st_pt}]`, 'gi'), '')
   }
   
   alert(replace_string('Hello world', ['l', 'd']))
