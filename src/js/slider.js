let currentSlide = 0;
const slides = document.querySelectorAll('.slider__slide');
const track = document.querySelector('.slider__track');
const prevBtn = document.querySelector('.slider__btn--prev');
const nextBtn = document.querySelector('.slider__btn--next');
const slideCount = slides.length;
let slideWidth = 0;
let autoSlideInterval;

function initSlider() {
    slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    // Автопрокрутка
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlider();
}

function updateSlider() {
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    // Сброс интервала
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
}

// Обработчики кнопок
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Свайп для мобильных
let touchStartX = 0;
let touchEndX = 0;

track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
        nextSlide();
    } else if (diff < -50) {
        prevSlide();
    }
}

// Инициализация при загрузке и ресайзе
window.addEventListener('load', initSlider);
window.addEventListener('resize', initSlider);