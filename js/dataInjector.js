// $(document).ready(function () {
//     $(function () {
//         $("head").append();
//         //$('#loadingMask').fadeOut(2000);
//         $('#main').fadeIn(3000);
//     });
// })

$(function () {
    var includes = $('[data-include]');
    $.each(includes, function () {
        var file = $(this).data('include')
        $(this).load(file);
    });
});