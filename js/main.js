

$(document).ready(function () {

    $('.thanks__feedback').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i> </button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
    });

})
