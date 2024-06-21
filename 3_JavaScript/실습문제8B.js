const userId = document.querySelector("#userId");
const userIdSpan = document.querySelector("#userIdSpan");
const userPwd = document.querySelector("#userPwd");
const userPwdSpan = document.querySelector("#userPwdSpan");
const userPwdCheck = document.querySelector("#userPwdCheck");
const userPwdCheckSpan = document.querySelector("#userPwdCheckSpan");
const userName = document.querySelector("#userName");
const userNameSpan = document.querySelector("#userNameSpan");
const email = document.querySelector("#email");
const emailSpan = document.querySelector("#emailSpan");

userId.addEventListener("input", function (e) {
  // 첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  const check = regExp.test(userId.value);

  if (check) {
    userIdSpan.style.color = "green";
    userIdSpan.innerHTML = "OK!";
    //e.target.nextElementSibling.style.color = "green";
    //e.target.nextElementSibling.innerHTML = "OK!";
  } else {
    userIdSpan.style.color = "red";
    userIdSpan.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
    // e.target.nextElementSibling.style.color = "red";
    // e.target.nextElementSibling.innerHTML =
    //  "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
  }
});
userPwd.addEventListener("input", function (e) {
  const regExp = /^[!-~]{8,15}$/;
  const check = regExp.test(userPwd.value);

  if (check) {
    userPwdSpan.style.color = "green";
    userPwdSpan.innerHTML = "ok!";
  } else {
    userPwdSpan.style.color = "red";
    userPwdSpan.innerHTML =
      "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.";
  }
});

userPwdCheck.addEventListener("input", function (e) {
  if (userPwd.value === userPwdCheck.value) {
    userPwdCheckSpan.style.color = "green";
    userPwdCheckSpan.innerHTML = "ok!";
  } else {
    userPwdCheckSpan.style.color = "red";
    userPwdCheckSpan.innerHTML = "위의 비밀번호와 일치하게 입력하시오.";
  }
});
