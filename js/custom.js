$(document).ready(function () {
  let current = 0;
  const total = 3;

  init();

  function init() {
    showSet(0);
  }

  // ======================
  // ★ 슬라이드 변경 이벤트
  // ======================
  $(document).on("click", ".fa-angle-up", function () {
    current = current > 0 ? current - 1 : total - 1;
    showSet(current);
  });

  $(document).on("click", ".fa-angle-down", function () {
    current = current < total - 1 ? current + 1 : 0;
    showSet(current);
  });

  // ======================
  // ★ 특정 인덱스의 세트만 보여주는 함수
  // ======================
  function showSet(i) {
    // Personal 타이틀
    $(".personal > .title2").hide().eq(i).fadeIn(300);

    // PROJECT 타이틀
    $(".projectWrap > .title2").hide().eq(i).fadeIn(300);

    // BG 띠지 (색상 포함)
    $(".bg").hide().eq(i).fadeIn(300);

    // 이미지 세트
    $(".conImg img").hide().eq(i).fadeIn(300);

    // 설명 li
    $(".conproject li").hide().eq(i).fadeIn(300);

    // arrBox 색상 세트
    $(".arrBox > div").hide().eq(i).fadeIn(300);

    // ===========================
    // 🔥 띠지 안에 li 내용 표시
    // ===========================
    // 띠지는 bg1/bg2/bg3 자체임 → 그 안에 li 내용 넣어주는 구조
    const text = $(".conproject li").eq(i).html();
    $(".bg").eq(i).html(text); // 띠지 안에 li 내용 삽입
  }
});
