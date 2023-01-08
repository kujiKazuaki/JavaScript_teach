const apiKey = document.getElementById("apiKey");

// 指定したサーバーにデータを取りに行く
const url =
  "https://api.open-meteo.com/v1/forecast?latitude=39.70&longitude=141.15&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo";
fetch(url)
  .then((data) => data.json())
  .then((json) => console.log(json));
