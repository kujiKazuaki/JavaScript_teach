const array = [
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
  "〇",
  "ニ",
];

const msgFnc = function () {
  let msg;
  const random = Math.floor(Math.random() * array.length);

  msg = "藤田" + array[random] + "コル";
  console.log(msg);

  if (msg === "藤田ニコル") {
    console.log("本物だ！");
  } else {
    console.log(`藤田ニコルさんのお名前の記載に誤りがございました。
    誤：藤田${array[random]}コルさん
    正：藤田ニコルさん
    お詫びして訂正させていただきます。`);
  }
};
msgFnc();
