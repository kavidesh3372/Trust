function toggleNav() {
    const navButtonsContainer = document.querySelector('.nav-buttons-container');
    navButtonsContainer.classList.toggle('show')
}
function scrollToContact() {
    document.querySelector('.location-icon-container').scrollIntoView({ behavior: 'smooth' });
}
function toggleNavbarColor() {
    var navbar = document.querySelector('.nav-container');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', toggleNavbarColor);

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function moveToSlide(index) {
    if (index < 0) {
        slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        slideIndex = 0;
    } else {
        slideIndex = index;
    }
    updateSlidePosition();
    updateDots();
}

function updateSlidePosition() {
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });
}

function autoSlide() {
    moveToSlide(slideIndex + 1);
    setTimeout(autoSlide, 5000); // Change slide every 3 seconds
}

autoSlide();