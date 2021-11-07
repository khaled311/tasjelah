$(window).on("load", function () {
  
    $(".loader").fadeOut(1000);
    $("html").css("overflow-y", "auto");
});

$(function () {

    // open Side Nav
    $(".menuTriger").on("click", function () {
        $(".sideNav").toggleClass("open");
        // $(".navover").toggleClass("open");
        $("body").css("overflow", "hidden");
        setTimeout(function () {
        $(".sideNav").addClass("origin");
        }, 500);
    });

    // Close Side Nav
    $(".close1").on("click", function () {
        // $(".navover").removeClass("open");
        $(".sideNav").toggleClass("open");
        // $(".sideNav").toggleClass("origin");
        $("body").css("overflow", "auto");
        setTimeout(function () {
        $(".sideNav").removeClass("origin");
        }, 600);
    });

    // Header Slider
    
    var swiper = new Swiper(".header_slider .mySwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        autoHeight: true,
        pagination: {
          el: ".header_slider .swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
        effect: "fade",
    });

    var swiper2 = new Swiper(".home_boxs .mySwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".home_boxs .swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".home_boxs .swiper-button-next",
            prevEl: ".home_boxs .swiper-button-prev",
        },
    });

    var swiper3 = new Swiper("#tasjeelah_info .mySwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
          el: "#tasjeelah_info .swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: "#tasjeelah_info .swiper-button-next",
            prevEl: "#tasjeelah_info .swiper-button-prev",
        },
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1.5,
            },
            992: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    var swiper4 = new Swiper(".tasjeelah_info_2 .mySwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".tasjeelah_info_2 .swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".tasjeelah_info_2 .swiper-button-next",
            prevEl: ".tasjeelah_info_2 .swiper-button-prev",
        },
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            360: {
              slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });

    var swiper5 = new Swiper(".testimonials_sec .mySwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".testimonials_sec .swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".testimonials_sec .swiper-button-next",
            prevEl: ".testimonials_sec .swiper-button-prev",
        },
        slidesPerView: 1,
        spaceBetween: 30,
    });

    var swiper6 = new Swiper(".tasjeelah_apps .mySwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".tasjeelah_apps .swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".tasjeelah_apps .swiper-button-next",
            prevEl: ".tasjeelah_apps .swiper-button-prev",
        },
        spaceBetween: 5,
        breakpoints: {
            360: {
              slidesPerView: 2.5,
            },
            480: {
              slidesPerView: 3.5,
            },
            768: {
              slidesPerView: 5,
            },
            992: {
                slidesPerView: 6,
            },
            1024: {
                slidesPerView: 8,
                spaceBetween: 5,
            },
        },
    });
    
    
    try{
        Fancybox.bind("[data-fancybox]", {
            // Your options go here
        });
    }catch(err){
        console.log(err);
    }
});
