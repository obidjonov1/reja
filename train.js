//             ========================== J-Task =======================
/* 
📌  J-Task: shunday function tuzing, uning parametri integer bolib, agar argument musbat bolsa 1, 
manfiy bolsa -1, nolga teng bolsa 0 soni return qilsin. */

function getNumber(num) {
  if (num > 0) return 1;
  else if (num < 0) return -1;
  else return 0;
}
console.log(getNumber(0)); // 0
console.log(getNumber(99)); // 1
console.log(getNumber(-99)); // -1
/* 





*/
//             ========================== I-Task =======================
/*      Shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib,  
      faqat positive yani noldan yuqori qiymatlarni arrayda return qilsin

    📌  Masalan: getPositive([0, -15, 5, -3, 2, -8, 9, -11]) return qilishi kerak [5, 2, 9] */

/* function getPositive(numbers) {
  return numbers.filter(function (number) {
    return number > 0;
  });
}
console.log(getPositive([0, -15, 5, -3, 2, -8, 9, -11]));  //[5, 2, 9] */
/* 





*/ //              ========================== H-Task =======================
/*   H-Task: Kiritilgan stringni teskari qilib chiqaradigan function tuzing, 
      masalan: reverseString("javascript") return qilishi kerak "tpircsavaj". */
/* function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("javascript")); // tpircsavaj */
/* 




*/
//                   ======================= F-Task =======================
/* Shunday function tuzingki unga integerlardan iborat array pass bolsin va function 
bizga osha arrayning eng katta qiymatiga tegishli birinchi indexsini qaytarsin.

📌  Masalan: findBig([4, 5, 9, 12,  3]) return qilishi kerak 3ni, 
    yoki findBig([0, 100, 5]) return 1 */

/* function findBig(arr) {
  let max = arr[0];
  let index = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      index = i;
      max = arr[i];
    }
  }

  return index;
}

console.log(findBig([4, 5, 9, 12, 3])); // 3
console.log(findBig([0, 100, 5])); // 1 */

/* 




*/
//               ======================= ASYNC funtion ====================
// ASYNCHRONOUS processing: Callbacks, Async && Promise */

// CALLBACK functionlar
// ASYNC functionlar
// PROMISE functionlar

/*
  DEFINATION          CALL
 
  callback            callback
  async/await         then/catch  async/await
  promise             then/catch  async/await
 */

// console.log("Jack Ma maslahatari");
/* const list = [
  "yaxshi talaba bo'ling", // 0-20
  "to'gri boshliq tanlang va koproq xato qiling", // 20-30
  "ozingizga ishlashni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsa qiling", // 50-60
  "endi dam oling", // 60-70
];

async function maslahatBer(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    // return list[5];
    // setTimeout(function () {   /* async functionda defination qismida setTimelarni ishlatib bo'lmaydi */
//   callback(null, list[5]);
// }, 5000);
// ===== setTIme bilan ishlash uchun "promise"dan foydalanamiz
/*
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
} */
// ============= then, catch orqali
// maslahatBer(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// CALL qismida qayta qayta so'rash uchun async/awaitdan foydalanamiz
// ============= async/await orqali
/* async function run() {
  let javob = await maslahatBer(65);
  console.log(javob);
  javob = await maslahatBer(31);
  console.log(javob);
  javob = await maslahatBer(41);
  console.log(javob);
}
run(); */
/* 




*/

//                   ======================= F-Task =======================
/* F-Task: findDoubler functionini tuzing, unga string pass bolib,
function bu stringda ketma-ket ikkita bir hil string qatnashgan bolsa true, 
aks holda false return qilish kerak. 
    📌  Masalan: findDoubler('hello') return true, yoki findDoubler('helola') return false 
    yoki findDoubler('robert5') return false. */
/*
function findDoubler(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) return true;
  }
  return false;
}
console.log(findDoubler("hello")); // true qaytaradi
console.log(findDoubler("helola")); // false qaytaradi
console.log(findDoubler("robert5")); // false qaytaradi */

/* 







*/
//               ======================= Callback funtion ====================
/* 
console.log("Jack Ma maslahatari");
const list = [
  "yaxshi talaba bo'ling", // 0-20
  "to'gri boshliq tanlang va koproq xato qiling", // 20-30
  "ozingizga ishlashni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
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
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}

console.log("passed here 0");
maslahatBer(20, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});
console.log("passed here 1"); */
/* function numberTop(num, callback) {
  if (typeof num !== "number") callback("sonni kiriting", null);
  else if (num > 100) callback(null, "bu son yuzdan katta");
  else {
    callback(null, "bu son yuzdan kichik");
  }
}

numberTop(99, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
}); */
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
