(function() {
    // mouse cursor effect
    window.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.cursor');
        const anchors = document.querySelectorAll('a');

        window.addEventListener('scroll', () => {
            gsap.to(cursor, {
                duration: 0.4,
                left: e.clientX + window.scrollX,
                top: e.clientY + window.scrollY
            });
        });

        gsap.to(cursor, {
            duration: 0.4,
            left: e.clientX + window.scrollX,
            top: e.clientY + window.scrollY
        });

        anchors.forEach((v, i, arr) => {
            v.addEventListener('mouseenter', () => {
                cursor.classList.add('active');
            });
            v.addEventListener('mouseleave', () => {
                cursor.classList.remove('active');
            });
        });
    });

    // color change
    const body = document.querySelector('body');
    const buttonColor = document.querySelector('.btn-color');
    buttonColor.addEventListener('click', (e) => {
        e.preventDefault();
        body.className = 'theme-2';
    });

})();
