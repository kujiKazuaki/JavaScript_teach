const inputDate = document.getElementById("input_date");
const inputValue = document.getElementById("input_value");
const addBtn = document.getElementById("input_addBtn");
const tbody = document.getElementById("table_tbody");

addBtn.onclick = () => {
  if (inputDate.value == "") {
    alert("日付が設定されていません");
    return;
  }
  if (inputValue.value == "") {
    alert("項目が設定されていません");
    return;
  }

  // 列を生成する
  const newRow = document.createElement("tr");
  // 日付を生成する
  const newDate = document.createElement("td");
  // コンテンツを生成する
  const newContent = document.createElement("td");
  // 削除ボタンを生成する
  const newRemove = document.createElement("td");
  // remove
  const removeBtn = document.createElement("input");
  removeBtn.setAttribute("type", "button");
  removeBtn.value = "remove";
  removeBtn.onclick = removeClick;

  // Toの中身を設定
  newDate.innerText = inputDate.value;
  newContent.innerText = inputValue.value;
  newRemove.appendChild(removeBtn);

  newRow.appendChild(newDate);
  newRow.appendChild(newContent);
  newRow.appendChild(newRemove);

  tbody.appendChild(newRow);
};

const removeClick = function (event) {
  // removeの設定
  console.log(event);
  event.currentTarget.parentNode.parentNode.remove();
};
