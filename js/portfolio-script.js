// js/portfolio-script.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth scrolling and navigation highlight
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Smooth scroll on navigation link click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });

                // Automatically close mobile menu after clicking
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('show');
                }
            }
        });
    });

    // Highlight current navigation item on scroll
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 2. Mobile menu toggle (Optimized version)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // Toggle 'show' class, coordinate with display logic in CSS
            navMenu.classList.toggle('show');

            // Optional simple animation effect
            if (navMenu.classList.contains('show')) {
                navMenu.style.display = 'flex';
            } else {
                // Delay hiding to match animation (if any)
                setTimeout(() => {
                    if (!navMenu.classList.contains('show')) {
                        navMenu.style.display = ''; // Revert to CSS media query control
                    }
                }, 300);
            }
        });
    }

    console.log("Portfolio Script Loaded");

    // 3. Image click enlarge function (Lightbox)
    // Create Modal structure and inject it into the body
    const modalHTML = `
        <div id="imageModal" class="modal">
            <span class="close-modal">&times;</span>
            <img class="modal-content" id="img01">
            <div id="caption"></div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeModal = document.querySelector(".close-modal");

    // Bind click event for field research images and User Journey Map
    // Add .image-placeholder img to ensure Journey Map can also be enlarged
    const clickableImages = document.querySelectorAll('.photo-item img, .image-placeholder img');

    clickableImages.forEach(img => {
        img.style.cursor = 'zoom-in'; // Show zoom-in cursor on hover
        img.addEventListener('click', function() {
            modal.style.display = "flex"; // Use flex for centering
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // Close function
    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Close when clicking on the overlay background
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Close on ESC key press (accessibility requirement)
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });
});