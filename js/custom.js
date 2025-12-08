$(document).ready(function () {
  let current = 0;
  const total = $(".conproject li").length;

  console.log("=== 초기화 ===");
  console.log("전체 슬라이드 개수:", total);
  console.log(".projectWrap .title2 개수:", $(".projectWrap .title2").length);
  console.log(".bg 개수:", $(".bg").length);
  console.log(".arrBox 구조:", $(".arrBox").html());

  // ▼ 아래
  $(document).on("click", ".fa-angle-down", function () {
    console.log("\n▼ 아래 버튼 클릭");
    slideNext();
    updateColors();
  });

  // ▲ 위
  $(document).on("click", ".fa-angle-up", function () {
    console.log("\n▲ 위 버튼 클릭");
    slidePrev();
    updateColors();
  });

  function slideNext() {
    console.log(
      "slideNext 실행 - current:",
      current,
      "→",
      (current + 1) % total
    );

    // 이미지 슬라이드
    let imgWrap = $(".conImg");
    imgWrap.animate({ scrollTop: "+=100%" }, 400, function () {
      imgWrap
        .find(".imgSlideWrap")
        .append(imgWrap.find(".imgSlideWrap img").first());
      imgWrap.scrollTop(0);
    });

    // 텍스트 슬라이드
    let textWrap = $(".conproject");
    textWrap.animate({ scrollTop: "+=100%" }, 400, function () {
      textWrap.append(textWrap.find("li").first());
      textWrap.scrollTop(0);
    });

    current = (current + 1) % total;
  }

  function slidePrev() {
    console.log(
      "slidePrev 실행 - current:",
      current,
      "→",
      current > 0 ? current - 1 : total - 1
    );

    let imgWrap = $(".conImg");
    imgWrap
      .find(".imgSlideWrap")
      .prepend(imgWrap.find(".imgSlideWrap img").last());
    imgWrap.scrollTop("100%");
    imgWrap.animate({ scrollTop: 0 }, 400);

    let textWrap = $(".conproject");
    textWrap.prepend(textWrap.find("li").last());
    textWrap.scrollTop("100%");
    textWrap.animate({ scrollTop: 0 }, 400);

    current = current > 0 ? current - 1 : total - 1;
  }

  function updateColors() {
    console.log("\n=== updateColors 실행 ===");
    console.log("현재 인덱스 (current):", current);

    // 1. BG 배경색 변경
    $(".bg").removeClass("on");
    $(".bg").eq(current).addClass("on");
    console.log(
      "활성화된 BG:",
      ".bg" + (current + 1),
      "- 클래스 확인:",
      $(".bg").eq(current).hasClass("on")
    );

    // 2. PROJECT 글자 변경 - 강제로 스타일 적용
    $(".projectWrap .title2").removeClass("on").css({
      opacity: "0.3",
      color: "#999", // 기본 색상
    });

    $(".projectWrap .title2").eq(current).addClass("on").css({
      opacity: "1",
      color: "#000", // 활성화 색상 (원하는 색으로 변경)
    });

    console.log("활성화된 PROJECT title2 인덱스:", current);
    console.log(
      "해당 title2 텍스트:",
      $(".projectWrap .title2").eq(current).text().trim()
    );
    console.log(
      "on 클래스 확인:",
      $(".projectWrap .title2").eq(current).hasClass("on")
    );

    // 3. 화살표 아이콘 활성화
    $(".arrBox .arr").removeClass("on").css("opacity", "0.3");

    let activeArr;
    if (current === 0) {
      activeArr = $(".arr1 .arr").first();
    } else if (current === 1) {
      activeArr = $(".arr2 .arr").first();
    } else if (current === 2) {
      activeArr = $(".arr3 .arr").first();
    }

    if (activeArr) {
      activeArr.addClass("on").css("opacity", "1");
      console.log("활성화된 화살표:", ".arr" + (current + 1));
    }

    console.log("===================\n");
  }

  // 페이지 로드 시 초기 색상 설정
  updateColors();
});
