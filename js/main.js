function sliderMainOne() {
    var swiper = new Swiper('.new .swiper', {
        slidesPerView: 1,
        centeredSlides: 'true',
        loop: true,
        navigation: {
            nextEl: '.new .swiper-button-next',
            prevEl: '.new .swiper-button-prev',
        },
        pagination: {
            el: ".new .swiper-pagination",
            clickable: true,
        },
    })
}

let cartSlidersArray = []

function cartSliders() {
    $(".basket__block").each(function(index, el) {
        $(el).attr("data-slider-id", index)
        cartSlidersArray[index] = new Swiper(`.basket__block[data-slider-id = "${index}"] .swiper`, {
            slidesPerView: 1,
            centeredSlides: 'true',
            loop: true,
            pagination: {
                el: `.basket__block[data-slider-id = "${index}"] .swiper-pagination`,
                clickable: true,
            },
        })
    })
};

let cardSlidersArray = []

function cardSliders() {
    $(".products-content__slider").each(function(index, el) {
        $(el).attr("data-slider-id", index)
        cardSlidersArray[index] = new Swiper(`.products-content__slider[data-slider-id = "${index}"] .swiper`, {
            slidesPerView: 1,
            centeredSlides: 'true',
            loop: true,
            pagination: {
                el: `.products-content__slider[data-slider-id = "${index}"] .swiper-pagination`,
                clickable: true,
            },
        })
    })
}

function sliderProducts() {
    var swiper = new Swiper(".furniture .mySwiper", {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        direction: 'vertical'
    });
    var swiper2 = new Swiper(".furniture .mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".furniture .swiper-button-next",
            prevEl: ".furniture .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

$(document).ready(function() {

    sliderMainOne();
    cartSliders();
    cardSliders();
    sliderProducts();

    // Menu
    $(".header-bottom__burger").click(function() {
        $(this).toggleClass("header-bottom__burger--active")
        $(".header-bottom__nav").toggleClass("header-bottom__nav--active")
        $(".header-top__center").toggleClass("header-top__center--active")
        $("body").toggleClass("fixed-body")
    })

    //Catalog
    $(".product-catalog__btn").click(function() {
        $(".product-catalog__btn-close").addClass("product-catalog__btn-close--active")
        $(".product-catalog__content").addClass("product-catalog__content--active")
        $("body").toggleClass("fixed-body")

    })

    $(".product-catalog__btn-close").click(function() {
        $(".product-catalog__btn-close").removeClass("product-catalog__btn-close--active")
        $(".product-catalog__content").removeClass("product-catalog__content--active")
        $("body").removeClass("fixed-body")
    })

    // Like
    $(".products__item-like").click(function() {
        $(this).toggleClass("products__item-like--active")
    })

    $(".basket__btn-check").click(function() {
        $(this).toggleClass("basket__btn-check--active")
    })

    function cartCalc() {
        $('.cartcalc .ccalc-minus').click(function() {
            let a = $(this).closest('.cartcalc').find('input').val();
            if (a > 1) {
                let b = +a - 1;
                $(this).closest('.cartcalc').find('input').val(b);
            } else {
                $(this).closest('.cartcalc').find('input').val(a);
            }
        });
        $('.cartcalc .ccalc-plus').click(function() {
            let a = $(this).closest('.cartcalc').find('input').val();
            let b = +a + 1;
            $(this).closest('.cartcalc').find('input').val(b);
        });
    }
    cartCalc()

    // hover slider
    $(".hover__pag-item").mouseover(function() {
        let path = $(this).attr("data-tab-path")
        $(this).parents(".hover__item-top").find(".hover__pag-item").removeClass("hover__pag-item--active")
        $(this).addClass("hover__pag-item--active")
        $(this).parents(".hover__item-top").find(".hover__item-img").removeClass("hover__item-img--active")
        $(this).parents(`.hover__item-top`).find(`.hover__item-img[data-tab-path="${path}"]`).addClass("hover__item-img--active")
    })

    // Accordion
    $('.aside-products__item-show').click(function() {
        $(this).toggleClass('aside-products__item-show--active');
        $(this).siblings('.aside-products__item-hidden').toggleClass('aside-products__item-hidden--active');
    })

    // Tab
    $(function() {
        $(".products-info__content").not(":first").hide()
        $(".products-info__btn").on("click", function() {
            $(".products-info__btn").removeClass("active").eq($(this).index()).addClass("active")
            $(".products-info__content").hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass("active")
    })

})