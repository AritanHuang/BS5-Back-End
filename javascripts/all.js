//解決mobile無法滿高問題
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

//JQuery
$(document).ready(function () {
    //收合側欄選單寫法
    $('.btn-expand').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('expand');
    });
    //按著選單後加上樣式
    $('.menu li').click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
});
