//====================== E-Task=================

/* Shunday function tuzing nomi calculator, u mos 
ravishda number, string, number qabul qilsin va javob return qilsin.

 📌  Masalan: calculator(8, "+", 2) return 10, calculator(4, "*", 2) return 8, 
calculator(4, "/", 2) return 2. Qoshimcha shart agar sonlar kiritilmasa yoki mahraj
 0 kiritilsa 'not valid to operate' stringni return qilsin */

function calculator(number1, symbol, number2) {
  if (
    number1 == undefined ||
    number1 == NaN ||
    number2 == undefined ||
    number2 == NaN
  ) {
    console.log("not valid to operate");
  }
  if (symbol === "+") {
    console.log(number1 + number2);
  } else if (symbol === "/") {
    if (number2 == 0) {
      console.log("not valid to operate");
    } else {
      console.log(number1 / number2);
    }
  } else if (symbol === "*") {
    console.log(number1 * number2);
  }
}

calculator(8, "+", 2); //10
calculator("*", 2); // not valid to operate
calculator(4, "/", 0); // not valid to operate
