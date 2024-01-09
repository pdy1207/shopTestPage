document.addEventListener("DOMContentLoaded", function () {
  var noticeElement = document.getElementById("notice");
  var mainBoxElement = document.getElementById("main-box");
  var containerElement = document.querySelector(".container");
  var goodsElement = document.querySelectorAll("#selected")[1];
  var noticeBoardElement = document.getElementById("noice__board");
  var orderedProductElement = document.querySelector(".ordered-product");
  var headerElement = document.querySelector(".top-box");

  function toggleDisplay() {
    if (mainBoxElement.style.display !== "none") {
      mainBoxElement.style.display = "none";
      goodsElement.style.color = "black";
      noticeElement.style.color = "#d1180b";
      containerElement.style.display = "block";
      orderedProductElement.style.display = "none";
    } else {
      mainBoxElement.style.display = "block";
      goodsElement.style.color = "";
      noticeElement.style.color = "";
      containerElement.style.display = "none";
      orderedProductElement.style.display = "block";
    }
  }

  noticeElement.addEventListener("click", toggleDisplay);
  goodsElement.addEventListener("click", toggleDisplay);

  function noticeBoardDisplay() {
    mainBoxElement.style.display = "none";
    containerElement.style.display = "none";
    headerElement.style.display = "none";
    orderedProductElement.style.display = "block";
  }

  noticeBoardElement.addEventListener("click", noticeBoardDisplay);
});
