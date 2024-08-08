// 1. 이벤트 연결
// one
$("#area1").one("click", () => {
  alert("처음이자 마지막으로 이벤트 핸들러 실행");
});

// on
// $("#area2").on("mouseenter", (event) => {
//   $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
// });
// 마우스가 내려갈 때 (mouseleave)
// -> 배경 색상 : beige, 텍스트 : 마우스가 내려감
// on
// $("#area2").on("mouseenleave", (event) => {
//   $(event.target).css("background-color", "beige").text("마우스가 내려감");
// });
$("#area2").on("mouseenter mouseleave ", (event) => {
  if (event.type === "mouseenter") {
    $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
  } else if (event.type === "mouseleave") {
    $(event.target).css("background-color", "beige").text("마우스가 내려감");
  }
});

/* $("#area2").on("click", (event) => {
  $(event.target)
    .css("background-color", "white")
    .text("")
    .off("mouseenter mouseleave"); // mouseenter, mouseleave 이벤트제거
}); */
$("#area2").on({
  mouseenter: () => {},
  mouseleave: () => {},
  click: () => {},
});

// 2. 키보드 이벤트
// kewdown, kewpress, keyup
$("textarea1").on({
  keydown: (e) => {
    console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keypress: (e) => {
    console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keyup: (e) => {
    console.log(`keydown - e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
  },
});

// 글자수세기
// val().length <-- 글자수!
// substr(시작인덱스, 길이) <-- 문자열자르기
$("textarea2").keyup((e) => {
  let target = $(e, target);
  let length = target.val().length;
  let maxLength = parseInt$("#maxLength").text();
  console.log(length);
  if (length > 100) {
    target.val(target.val().substr(0, 100));
  } else {
    $("#counter").text(length);
  }
});

$("id").keyup((e) => {
  let target = $(e, target);
  let length = target.val().length;
  let maxLength = parseInt$("maxLength").text();
  console.log(length);
  if (4 > length > 12) {
    target.val(target.val().substr(4, 12));
  } else {
    let maxLength = parseInt$("maxLength").text("사용 불가능한 아이디입니다.");
  }
});
$("#userId").keyup((e) => {
  let id = $(e.target).val(); // 제이쿼리 방식
  id = e.target.value; // 자바스크립트 방식

  const regExp = /^[a-z][a-z0-9]{3,11}$/;
  if (regExp.test(id)) {
    $("#idCheck").text("사용 가능한 아이디입니다.").css("color", "green");
  } else if (id === "") {
    $("#idCheck").text("");
  } else {
    $("#idCheck").text("사용 불가능한 아이디입니다.").css("color", "red");
  }
});

// 3. trigger() 메서드
$("#area3").click(() => {
  let counter = $("#counter2");
  let current = parseInt(counter.texxt());
  counter.text(++current);
});

${"#btn"}.click(() => {
    $("#area3")
})
