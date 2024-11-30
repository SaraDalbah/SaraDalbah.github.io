document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close hamburger menu when resizing to desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });

    // Smooth Scrolling
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth',
            });
        });
    });

    // Scroll Animation
    const scrollElements = document.querySelectorAll('.scroll');
    function handleScrollAnimation() {
        scrollElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                el.classList.add('is-visible');
            }
        });
    }
    window.addEventListener('scroll', handleScrollAnimation);

    // Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.classList.add('show'); // Show the button after scrolling 200px
    } else {
        backToTopButton.classList.remove('show'); // Hide the button when scrolling back up
    }
});

    // Form Validation
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function (event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            event.preventDefault();
            alert('Please fill out all fields.');
        } else {
            alert('Message sent successfully!');
        }
    });

    // Preloader
    window.addEventListener('load', function () {
        const preloader = document.querySelector('.preloader');
        preloader.style.display = 'none';
    });

    // Progress Bar Animation on Scroll
const progressBar = document.querySelector('.progress-bar');

function updateProgressBar() {
  const scrollPosition = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollPosition / documentHeight) * 100;

  progressBar.style.width = `${scrollPercentage}%`;
}

window.addEventListener('scroll', updateProgressBar);

window.addEventListener('load', updateProgressBar);

    // Typewriter Effect for Paragraphs
    const typewriterElements = document.querySelectorAll('.typewriter p');
    typewriterElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.display = 'inline';
        }, index * 2000);
    });
});
