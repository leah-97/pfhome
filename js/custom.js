function updateSlide() {
  // 중앙 제목
  $(".centerTitle").text(titles[currentSlide]);

  // 띠지 색상
  $(".centerTitleBox").css("background-color", bandColors[currentSlide]);

  // 이미지
  $(".conImg img").fadeOut(200, function () {
    $(this).attr("src", images[currentSlide]).fadeIn(200);
  });

  // Personal / Project title
  $(".personal > .title2").fadeOut(300).eq(currentSlide).fadeIn(300);
  $(".projectWrap .title2").fadeOut(300).eq(currentSlide).fadeIn(300);

  // 배경
  $(".bg").fadeOut(300).eq(currentSlide).fadeIn(300);

  // 설명 텍스트 (li)
  $(".conproject li").fadeOut(300).eq(currentSlide).fadeIn(300);

  // 화살표 세트
  $(".arrBox > div").fadeOut(300).eq(currentSlide).fadeIn(300);
}
