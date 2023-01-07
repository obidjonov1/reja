//                   ======================= F-Task =======================
/* F-Task: findDoubler functionini tuzing, unga string pass bolib,
function bu stringda ketma-ket ikkita bir hil string qatnashgan bolsa true, 
aks holda false return qilish kerak. 
    📌  Masalan: findDoubler('hello') return true, yoki findDoubler('helola') return false 
    yoki findDoubler('robert5') return false. */

function findDoubler(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) return true;
  }
  return false;
}
console.log(findDoubler("hello")); // true qaytaradi
console.log(findDoubler("helola")); // false qaytaradi
console.log(findDoubler("robert5")); // false qaytaradi
/*





*/
//               ======================= Callback funtion ====================

console.log("Jack Ma maslahatari");
const list = [
  "yaxshi talaba bo'ling", // 0-20
  "to'gri boshliq tanlang va koproq xato qiling", // 20-30
  "ozingizga ishlashni boshlang", // 30-40
  "siz kuchli bolgan narsslarni qilig", // 40-50
  "yoshlarga investitsa qiling", // 50-60
  "endi dam oling", // 60-70
];

function maslahatBer(a, callback) {
  if (typeof a !== "number") callback("insert a nuber", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    callback(null, list[5]);
  }
}

maslahatBer(44, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});

/*





*/

//                         ====================== E-Task=================

/* Shunday function tuzing nomi calculator, u mos 
ravishda number, string, number qabul qilsin va javob return qilsin.

 📌  Masalan: calculator(8, "+", 2) return 10, calculator(4, "*", 2) return 8, 
calculator(4, "/", 2) return 2. Qoshimcha shart agar sonlar kiritilmasa yoki mahraj
 0 kiritilsa 'not valid to operate' stringni return qilsin. */

/* function calculator(number1, symbol, number2) {
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
calculator(4, "/", 0); // not valid to operate */
