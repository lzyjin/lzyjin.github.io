
// aos
AOS.init({
    duration: 2500,
    easing: 'ease-in-out-back',
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


