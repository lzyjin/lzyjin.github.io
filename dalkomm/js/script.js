const swiper = new Swiper('.slide .swiper', {
    direction: 'horizontal',
    effect: 'fade',
    autoPlay: {
        delay: 3000,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
