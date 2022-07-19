
// aos -----------
AOS.init({
    duration: 1500,
    easing: 'ease-out-back',
    // anchorPlacement: 'bottom-bottom'
});

// swiper -----------
const swiper = new Swiper('.slide .swiper', {
    direction: 'horizontal',
    effect: 'fade',
    autoplay: {
        delay: 3000,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

swiper.on('slideChange', function (swiper) {
    const index = swiper.activeIndex;
    const swiperTextList = document.querySelectorAll('.swiper-text');
    swiperTextList.forEach(v => v.classList.remove('active'));
    document.querySelector(`.swiper-text-${index}`).classList.add('active');
});


// header hover effect -----------
const gnbItems = document.querySelectorAll('.gnb-item');
const lnbBg = document.querySelector('.lnb-bg');

gnbItems.forEach((v, i, arr) => {
    v.addEventListener('mouseenter', () => {
        v.classList.add('active');
        lnbBg.classList.add('active');
    });
    v.addEventListener('mouseleave', () => {
        v.classList.remove('active');
        lnbBg.classList.remove('active');
    });
});




// mouse move effect -----------
window.addEventListener('mousemove', (e) => {
    const standardX = window.innerWidth / 2 - e.clientX;
    const standardY = window.innerHeight / 2 - e.clientY;

    const dot1 = document.querySelector('.phrases .dot-1');
    const dot2 = document.querySelector('.phrases .dot-2');
    const dot3 = document.querySelector('.phrases .dot-3');

    dot1.style.transform = `translate(${standardX / 5}px, ${standardY / 5}px)`;
    dot2.style.transform = `translate(${standardX / 5}px, ${standardY / 5}px)`;
    dot3.style.transform = `translate(${-standardX / 5}px, -${-standardY / 5}px)`;
});


// svg stroke animation -----------
// stroke 길이 알아내기
const blockLines = document.querySelectorAll('.playground .block .line');
const block1DashOffset = document.querySelector('.playground .block-square .line path').getTotalLength();
const block2eDashOffset = document.querySelector('.playground .block-circle .line path').getTotalLength();
const block3DashOffset = document.querySelector('.playground .block-house .line path').getTotalLength();

console.log(block1DashOffset, block2eDashOffset, block3DashOffset);

blockLines.forEach(v => {
    // v.style.animation = 'animation: dash-ani 2s alternate infinite';
});

// document.querySelector('.playground .block-square .line').style.strokeDasharray = block1DashOffset;
// document.querySelector('.playground .block-square .line').style.strokeDasharray = block2eDashOffset;
// document.querySelector('.playground .block-square .line').style.strokeDasharray = block3DashOffset;


// m-header burger click active
const mHeader = document.querySelector('.m-header');
const burger = document.querySelector('.m-header .burger');
const mMenu = document.querySelector('.m-menu');
burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    mMenu.classList.toggle('active');
    mHeader.classList.toggle('active');
    document.querySelector('html').classList.toggle('no-scroll');
    document.querySelector('body').classList.toggle('no-scroll');
});










