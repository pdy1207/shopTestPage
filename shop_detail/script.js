// 게시판 클릭 이벤트
document.getElementById("noice__board").addEventListener("click", function () {
  var wrapElement = document.querySelector(".wrap");
  var containerElement = document.querySelector(".container");
  var boxElement = document.querySelector(".box");

  if (wrapElement.style.display !== "none") {
    wrapElement.style.display = "none";
    containerElement.style.display = "block";
    // 색상 변경
    document.getElementById("noice__board--non").style.color = "#333";
    document.getElementById("noice__board").style.color = "#d1180b";
    // box 스타일 변경
    boxElement.style.top = "57%";
    boxElement.style.height = "57vh";
  } else {
    wrapElement.style.display = "block";
    containerElement.style.display = "none";
    // 색상 변경
    document.getElementById("noice__board--non").style.color = "#d1180b";
    document.getElementById("noice__board").style.color = "#333";
    boxElement.style.top = "61%"; // Reset to the default value
    boxElement.style.height = ""; // Reset to
  }
});
// 등록하기 버튼 클릭 이벤트
var noticeDetailBoxElement = document.querySelector(".notice__detail--box");
var bodyElementsToHide = document.querySelectorAll(
  "body > *:not(header, .notice__detail--box)"
);

noticeDetailBoxElement.style.display = "none"; // Hide initially

document
  .getElementById("notice__detail")
  .addEventListener("click", function () {
    if (noticeDetailBoxElement.style.display !== "block") {
      noticeDetailBoxElement.style.display = "block";

      bodyElementsToHide.forEach(function (element) {
        element.style.display = "none";
      });
    } else {
      noticeDetailBoxElement.style.display = "none";

      bodyElementsToHide.forEach(function (element) {
        element.style.display = "block";
      });
    }
  });
