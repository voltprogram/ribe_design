const header = document.querySelector('header');
const fv = document.querySelector('.fv');
const arrowTop = document.querySelector('.arrow-top')

function handleScroll() {
    const fvBottom = fv.offsetTop + fv.offsetHeight;
    if (window.scrollY > fvBottom) {
      header.classList.add('action');
      arrowTop.classList.add('action');
    } else {
      header.classList.remove('action');
      arrowTop.classList.remove('action');
    }
  }
  window.addEventListener('scroll', handleScroll);


$('.slider').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: false,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrow: true,
    appendArrows: $('.arrow-box'),
    prevArrow: '<div class="slide-arrow prev-arrow"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slide-arrow next-arrow"></div>',//矢印部分NextのHTMLを変更
    dots: false,//下部ドットナビゲーションの表示
    variableWidth: true,
    responsive: [
        {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に2枚見せる
            slidesToScroll: 1,//1回のスクロールで2枚の写真を移動して見せる
            variableWidth: false,
        }
    }
]
});

// デバイスに応じてビューポートを設定
function judegeDevice() {
  const ua = navigator.userAgent;

  if ((ua.indexOf('iphone') > 0 || ua.indexOf('android') > 0) && ua.indexOf('Mobile') > 0) {
    $("meta[name='viewport']").attr('content', 'width=device-width,initial-scale=1.0');
  } else if (ua.indexOf('iPad') > 0 || ua.indexOf('android') > 0){
    $("meta[name='viewport']").attr('content', 'width=1280');
  } else {
    $("meta[name='viewport']").attr('content', 'width=device-width,initial-scale=1.0');
  }
}

// 画面サイズに応じてビューポートを設定
function judgeWindowSize() {
  const windowWidth = $(window).width();
  //PC・SPサイズをここで調整
  if (windowWidth <= 760) {
      $("meta[name='viewport']").attr('content', 'width=device-width, initial-scale=1.0');
  } else if (windowWidth > 760 && windowWidth <= 1480) {
      $("meta[name='viewport']").attr('content', 'width=1480');
  } else {
      $("meta[name='viewport']").attr('content', 'width=device-width, initial-scale=1.0');
  }
}

// ウィンドウサイズが変更されたらjudgeWindowSizeを呼び出す
$(window).resize(function () {
  judgeWindowSize();
});

// ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header-nav');
const head = document.querySelector('.header');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
  head.classList.toggle('is-active');
})