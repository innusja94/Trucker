(function () {
    const burger = document.querySelector(".menu__toggle");
    burger.addEventListener("click", () => {
        burger.classList.toggle("menu__toggle-active");
    });
})();

$(".menu__toggle").click(function (e) {
    e.preventDefault();
    $(".menu__list").toggleClass("menu__list__show");
    $(".body").toggleClass("body__lock");
});

$(document).ready(function () {

    $(".thanks__feedback").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 950,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    centerPadding: "100px",
                },
            },
            {
                breakpoint: 780,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    centerPadding: "70px",
                },
            },
            {
                breakpoint: 705,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    centerPadding: "30px",
                },
            },
            {
                breakpoint: 620,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    centerPadding: "10px",
                },
            },
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 550,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: "0px",
                },
            },
        ],
    });


})
