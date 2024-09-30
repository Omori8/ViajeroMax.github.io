document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    initCarousel('inicio-carousel');
    initCarousel('galeria-carousel');
    initCarousel('nosotros-carousel');
});

// estrellas
document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.rating span');
    const ratingValue = document.getElementById('rating-value');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = star.getAttribute('data-value');
            ratingValue.textContent = selectedRating;
            updateStarRating(selectedRating);
        });

        star.addEventListener('mouseover', () => {
            updateStarRating(star.getAttribute('data-value'));
        });

        star.addEventListener('mouseout', () => {
            updateStarRating(selectedRating);
        });
    });

    function updateStarRating(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }
    
});



function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

function initCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    if (carousel) {
        carousel.setAttribute('data-slide-index', 0);
        showSlide(carouselId, 0);
    }
}

function showSlide(carouselId, n) {
    const carousel = document.getElementById(carouselId);
    if (carousel) {
        const slides = carousel.getElementsByClassName('carousel-image');
        let slideIndex = parseInt(carousel.getAttribute('data-slide-index'));

        slideIndex = n;
        if (slideIndex >= slides.length) { slideIndex = 0; }
        if (slideIndex < 0) { slideIndex = slides.length - 1; }

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }

        slides[slideIndex].classList.add('active');
        carousel.setAttribute('data-slide-index', slideIndex);
    }
}

function nextSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    if (carousel) {
        let slideIndex = parseInt(carousel.getAttribute('data-slide-index'));
        showSlide(carouselId, slideIndex + 1);
    }
}

function prevSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    if (carousel) {
        let slideIndex = parseInt(carousel.getAttribute('data-slide-index'));
        showSlide(carouselId, slideIndex - 1);
    }
}
