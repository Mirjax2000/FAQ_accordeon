// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

$(function () {
    var checkbox = $('.checkbox'),
        paragraph = $('p'),
        first = $('.first');

    paragraph.hide(0);
    first.show(0);

    checkbox.on('click', function () {
        $(this).parent().next(paragraph).slideToggle();
    });
});
