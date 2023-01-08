const oneBtn = document.getElementById("oneBtn");
const twoBtn = document.getElementById("twoBtn");
const threeBtn = document.getElementById("threeBtn");
const feedBack = document.getElementById("feedBack");

let feedbacklist = [
  { id: 0, text: "(正直これ！)" },
  { id: 1, text: "夢見たいけどこれじゃない！" },
  { id: 2, text: "これやで😊" },
];

oneBtn.onclick = function () {
  feedBack.textContent = feedbacklist[0].text;
};
twoBtn.onclick = function () {
  feedBack.textContent = feedbacklist[1].text;
};
threeBtn.onclick = function () {
  feedBack.textContent = feedbacklist[2].text;
};
