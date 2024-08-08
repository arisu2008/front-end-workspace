// 3. slideDown, slideUp, slideToggle
$(".menu").click((e) => {
  let content = $(e.target).next();
  /* if (content.css("display") === "none") {
    content.slideDown(500);
  } else {
    content.slideUp(10000);
  } */
  //   content.slideToggle(500);
  // 하나의 콘텐츠만 slideDown!
  $(".contents").slideUp();
  if (content.css("display") === "none") {
    content.slideDown(500);
  }
});
