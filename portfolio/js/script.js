(function() {
    // mouse cursor effect
    window.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.cursor');
        const anchors = document.querySelectorAll('a');

        window.addEventListener('scroll', () => {
            gsap.to(cursor, {
                duration: 0.2,
                left: e.clientX + window.scrollX,
                top: e.clientY + window.scrollY
            });
        });

        gsap.to(cursor, {
            duration: 0.2,
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
        const currColor = +body.getAttribute('class').substring(6);
        console.log(currColor);
        if(currColor === 5) {
            body.className = 'theme-1';
        } else {
            body.className = `theme-${currColor + 1}`;
        }
    });

    // scroll header background
    const header = document.querySelector('header');
    window.addEventListener('scroll', (e) => {
        // console.log(window.scrollY);
        if(window.scrollY > 100) {
            // header.style.background = '#fff';
            header.classList.add('active');
        } else {
            header.classList.remove('active');
            // header.style.background = 'transparent';
        }
    });

    // gnb menu scroll move
    const menus = document.querySelectorAll('header .menu a');
    menus.forEach((v, i, arr) => {
        v.addEventListener('click', (e) => {
            e.preventDefault();
            const href = v.getAttribute('href');
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
            });
        });
    });


})();
