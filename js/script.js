'use strict';

// FUNCTION IsNaN

let isNum = function (n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
};

// FUNCTIONS
let getRandomInt = function (max) {
   return Math.floor(Math.random() * Math.floor(max));
};

let start = function () {
   let randomNum = getRandomInt(100);
   let attempt = 10;
   let game = function () {
      attempt--;
      if (attempt < 0) {
         if (confirm('Поптки кончались, хотите сыграть ещё?')) {
            start();
         } else {
            alert('До свидания!');
            return;
         }
      } else {
         let num = prompt('Угадай число от 1 до 100');
         if (num === null) {
            alert('До свидания!');
            return;
         }
         if (isNum(num)) {
            let realNum = +num;
            if (realNum > randomNum) {
               alert(`Загаданное число меньше. У Вас осталось ${attempt} попыток`);
               game();
            } else if (realNum < randomNum) {
               alert(`Загаданное число больше. У Вас осталось ${attempt} попыток`);
               game();
            } else {
               if (confirm('Вы угадали! Сыграем ещё?')) {
                  start();
               } else {
                  alert('До свидания!');
                  return;
               }
            }
         } else {
            alert('Введите число');
            game();
         }
      }
   };


   game();
};

start();