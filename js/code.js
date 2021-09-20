window.onload = () => {

    $('#menu-icon').click(function () {
        $('#main-nav').slideToggle();
    });

    /* GSAP ANIMATION */

    gsap.to('.title-span', {x: '0%', duration: 0.8, stagger: 0.2, delay: 0.6});
    gsap.to('.subtitle-banner', {x: '0%', duration: 0.8, delay: 0.8});
    gsap.to('.link-social', {opacity: '1', duration: 0.8, delay: 0.8});

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        toggleActions: "play resume none none",
    });

    gsap.to('.span-about, .text-about',  {
        scrollTrigger: {
            trigger: '#about-me',
            start: 'top center',
            end: '200px center',
        },
        duration: 0.4,
        stagger: 0.2,
        translateX: 0,
    });

    gsap.to('.span-section-1, .text-section-1, .img-mywork-1',  {
        scrollTrigger: {
            trigger: '#my-work',
            start: '100px center',
            end: '350px center',
        },
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        translateX: 0,
    });

    gsap.to('.span-section-2, .text-section-2, .img-mywork-2',  {
        scrollTrigger: {
            trigger: '.section-2',
            start: 'top center',
            end: '300px center',
        },
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        translateX: 0,
    });

    gsap.to('.img-gallery',  {
        scrollTrigger: {
            trigger: '#gallery',
            start: 'top center',
            end: '400px center',
        },
        opacity: 1,
        duration: 0.2,
        stagger: 0.2,
    });

    gsap.to('.span-contact, .div-text-contact, .contact-form',  {
        scrollTrigger: {
            trigger: '#contact',
            start: '100 center',
            end: '300px center', 
        },
        opacity: 1,
        translateX: 0,
        duration: 0.4,
        stagger: 0.2,
    });
    
    gsap.to('.btn-up',  {
        scrollTrigger: {
            trigger: '#about-me',
            start: 'bottom bottom',
            end: 'bottom 90%',
            toggleActions: "play resume reverse none",
        },
        opacity: 1,
        display: 'inline-flex',
        duration: 0.2,
    });
    

}

/*const menu = document.querySelector('#menu-icon');
const nav = document.querySelector('.main-nav');

menu.addEventListener('click', () => {

    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        TweenLite.to(nav, 0.6, { display: 'none', opacity: 0 });
    } else {
        nav.classList.add('active');
        TweenLite.set(nav, { display: 'block', opacity: 1 })
        TweenLite.from(nav, 0.6, { display: 'none', opacity: 0 });
    }

}); */



