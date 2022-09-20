$(document).ready(function () {
    //收合側欄選單寫法
    $('.btn-expand').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('expand');
    });
});