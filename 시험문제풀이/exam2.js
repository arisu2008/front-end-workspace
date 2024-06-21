const id = document.querySelector("#id");
const idSpan = document.querySelector("#idSpan");
const pwd = document.querySelector("#pwd");
const pwdSpan = document.querySelector("#pwdSpan");
const pwdCheck = document.querySelector("#pwdCheck");
const pwdCheckSpan = document.querySelector("#pwdCheckSpan");

id.addEventListener("input", function () {
  if (id.valus === "") {
    idSpan.innerHTML = "필수 입력 항목입니다";
  } else {
    idSpan.innerHTML = "";
  }
});
pwd.addEventListener("input", function () {
  const regExp = /^[!-~]{8,32}$/;
  if (pwd.value) {
    pwdSpan.innerHTML = "";
  } else {
    pwdSpan.innerHTML = "영문자 대/소문자, 특수문자, 숫자포함 8 ~ 32자";
  }
});

pwdCheck.addEventListener("input", function () {
  if (pwd.value === pwdCheck.value) {
    pwdCheckSpan.innerHTML = "";
  } else {
    pwdCheckSpan.innerHTML = "비밀번호와 일치하지 않습니다";
  }
});
