 

// Select all necessary elements
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.pagination-dot');
const testimonialBoxes = document.querySelectorAll('.testimonial-box');
let currentSlide = 0;

// Function to update the carousel position
function updateCarousel() {
    // Calculate the new transform value based on the current slide
    const offset = -currentSlide * (testimonialBoxes[0].offsetWidth + 40); // 40 is the margin between boxes
    carousel.style.transform = `translateX(${offset}px)`;

    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
            dot.classList.add('active');
        }
    });
}

// Add event listeners to pagination dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index; // Set current slide to the index of the clicked dot
        updateCarousel(); // Update the carousel
    });
});

// Optional: Add swipe functionality for mobile devices
let startX;

carousel.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

carousel.addEventListener('touchmove', (event) => {
    const moveX = event.touches[0].clientX - startX;
    if (moveX > 50) {
        // Swipe right
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    } else if (moveX < -50) {
        // Swipe left
        if (currentSlide < testimonialBoxes.length - 1) {
            currentSlide++;
            updateCarousel();
        }
    }
});

// Initial setup
updateCarousel();
// script.js
