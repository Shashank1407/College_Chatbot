let lastScrollTop = 0;
let navbarTimeout;
const navbar = document.getElementById('navbar');
const menuIcon = document.getElementById('menuIcon');
console.log(menuIcon)
const navElementsContainer = document.querySelector('.navElementsContainer');
const navImage = document.getElementById('navImage');
const topLine = document.getElementById('topLine');
const chatb = document.querySelector('.chat-frame-container');


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}
setInterval(nextSlide, 3000);


topLine.classList.add('show');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {
        topLine.classList.add('show');
        navbar.style.top = '40px';
    } else {
        topLine.classList.remove('show');
        navbar.style.top = '0';
    }

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
        clearTimeout(navbarTimeout);
    } else {
        clearTimeout(navbarTimeout);
        navbarTimeout = setTimeout(() => {
            navbar.classList.remove('hidden');
        }, 50);
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


menuIcon.addEventListener('click', function() {
    console.log('Menu icon clicked!');
    navElementsContainer.classList.toggle('active');
    if (navElementsContainer.classList.contains('active')) {
        navImage.style.display = 'none';
    } else {
        navImage.style.display = 'flex';
    }
});



window.addEventListener('scroll', throttle(handleScroll, 100));

function throttle(fn, wait) {
    let lastTime = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastTime >= wait) {
            lastTime = now;
            fn.apply(this, args);
        }
    };
}



function chatbot(){
    if(chatb.style.display == 'none')
    {
        chatb.style.display = 'block';
    }
    else{
        chatb.style.display = 'none';
    }
}