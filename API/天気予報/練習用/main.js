function success(pos) {
  console.log(pos);
}

function fail(error) {
  alert("位置情報の取得に失敗しました。エラーコード：" + error.code);
}

navigator.geolocation.getCurrentPosition(success, fail);
