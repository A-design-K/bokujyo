// alert(123456789)
$(document).ready(function () {
  $('.spMenu__btn').click(function () {
    $('.spMenu__wrapper').toggleClass('open')
    $('.spMenu__btn').toggleClass('open')
  });
});

document.querySelectorAll('.faq__btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const faqList = this.nextElementSibling; // このボタンの直後の<ul>
    faqList.classList.toggle('is-open');
  });
});
// querySelectorAll() + forEach() で全ボタンに処理



const swiper = new Swiper("#about__swiper", {
  loop: true, // ループ
  speed: 5000, // ゆっくり(デフォルトは300)
  slidesPerView: "auto", // 画像の幅に応じて複数表示
  spaceBetween: 20, // スライド間の余白
  grabCursor: true, // カーソルを置いたときに指のカーソルを表示
  allowTouchMove: false, // ドラッグ操作を無効化（動きを止めない）
  autoplay: { // 自動再生
    delay: 0, //  途切れなくループ
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // // 前後の矢印
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

});

const swiper_2 = new Swiper("#product__swiper", {
  loop: true, // ループ
  speed: 7000, // ゆっくり(デフォルトは300)
  slidesPerView: "auto", // 画像の幅に応じて複数表示
  spaceBetween: 20, // スライド間の余白
  grabCursor: true, // カーソルを置いたときに指のカーソルを表示
  allowTouchMove: false, // ドラッグ操作を無効化（動きを止めない）
  autoplay: { // 自動再生
    delay: 0, //  途切れなくループ
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(function () {
  // ナビゲーションをクリック
  $("a[href^='#']:not([href='#'])").click(function () {
    // 移動先のコンテンツの位置を取得
    var target = $($(this).attr("href")).offset().top;

    // スクロールされる位置padding100pxのうち
    target -= -30;

    // コンテンツへスクロール
    $("html, body").animate({ scrollTop: target }, 500);

    //  ハンバーガーメニューを閉じる
    $(".spMenu__wrapper").removeClass("open");
    $(".spMenu__btn").removeClass("open");


    // クリック時の処理
    return false;

  });
});


