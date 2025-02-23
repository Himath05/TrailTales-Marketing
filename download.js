document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.gallery-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.gallery-nav.next');
    const prevButton = document.querySelector('.gallery-nav.prev');
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    // Arrange slides next to each other
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    // Next button click
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide') || slides[0];
        let nextSlide = currentSlide.nextElementSibling;
        if (!nextSlide) {
            nextSlide = slides[0]; // Loop to first slide
        }
        moveToSlide(currentSlide, nextSlide);
    });

    // Previous button click
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide') || slides[0];
        let prevSlide = currentSlide.previousElementSibling;
        if (!prevSlide) {
            prevSlide = slides[slides.length - 1]; // Loop to last slide
        }
        moveToSlide(currentSlide, prevSlide);
    });

    // Beta signup form handling
    const betaForm = document.querySelector('.beta-signup');
    const betaButton = document.querySelector('.beta-btn');

    betaButton.addEventListener('click', function() {
        const emailInput = betaForm.querySelector('input[type="email"]');
        const email = emailInput.value;

        if (email) {
            // Here you would typically send this to your server
            console.log('Beta signup:', email);
            alert('Thank you for signing up! We\'ll notify you when beta testing begins.');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}); 