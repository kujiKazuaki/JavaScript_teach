window.addEventListener("DOMContentLoaded", function () {
  var img_element = document.getElementById("rhinos");

  img_element.addEventListener("dragstart", function (e) {
    e.target.style.opacity = 0.5;
  });

  document.addEventListener("dragend", function (e) {
    e.target.style.opacity = 1;
  });

  document.addEventListener("dragenter", function (e) {
    if (e.target.tagName === "DIV") {
      e.target.style.backgroundColor = "#eee";
    }
  });

  document.addEventListener("dragleave", function (e) {
    if (e.target.tagName === "DIV") {
      e.target.style.backgroundColor = "#fff";
    }
  });

  document.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  document.addEventListener("drop", function (e) {
    e.preventDefault();

    if (e.target.tagName === "DIV") {
      e.target.style.backgroundColor = "";
      img_element.parentNode.removeChild(img_element);
      e.target.appendChild(img_element);
    }
  });
});
