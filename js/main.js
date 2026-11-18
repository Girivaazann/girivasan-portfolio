
/* =========================================
   GIRIVASAN PORTFOLIO
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   1. MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");


if (menuToggle && navLinks) {

    // Open and close mobile navigation

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isExpanded = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isExpanded);

        menuToggle.setAttribute(
            "aria-label",
            isExpanded ? "Close navigation menu" : "Open navigation menu"
        );

    });


    // Close navigation after clicking a link

    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}



/* =========================================
   2. PROFESSIONAL JOURNEY
   SHOW MORE / SHOW LESS
========================================= */

const showMoreButtons = document.querySelectorAll(".show-more");


showMoreButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const extraContent = button.nextElementSibling;

        if (!extraContent) {
            return;
        }

        const isHidden = extraContent.hidden;

        extraContent.hidden = !isHidden;

        button.textContent = isHidden
            ? "Show Less −"
            : "Show More +";

        button.setAttribute("aria-expanded", isHidden);

    });

});



/* =========================================
   3. HOBBY GALLERY LIGHTBOX
========================================= */

const hobbyCards = document.querySelectorAll(".hobby-card");

const hobbyLightbox = document.getElementById("hobby-lightbox");

const lightboxClose = document.getElementById("lightbox-close");

const lightboxTitle = document.getElementById("lightbox-title");

const lightboxDescription = document.getElementById(
    "lightbox-description"
);

const lightboxImage = document.getElementById("lightbox-image");


if (
    hobbyLightbox &&
    lightboxClose &&
    lightboxTitle &&
    lightboxDescription &&
    lightboxImage
) {

    // Open the popup when a hobby card is selected

    hobbyCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const title = card.dataset.title;

            const description = card.dataset.description;

            const icon = card.querySelector(".hobby-placeholder");

            lightboxTitle.textContent = title;

            lightboxDescription.textContent = description;

            lightboxImage.textContent = icon
                ? icon.textContent
                : "✨";

            hobbyLightbox.showModal();

        });

    });


    // Close popup using the close button

    lightboxClose.addEventListener("click", function () {

        hobbyLightbox.close();

    });


    // Close popup by clicking outside its content

    hobbyLightbox.addEventListener("click", function (event) {

        if (event.target === hobbyLightbox) {

            hobbyLightbox.close();

        }

    });

}



/* =========================================
   4. AUTOMATIC COPYRIGHT YEAR
========================================= */

const currentYear = document.getElementById("current-year");


if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}



/* =========================================
   5. SCROLL REVEAL ANIMATIONS
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".timeline-item, " +
    ".skill-card, " +
    ".project-card, " +
    ".interest-card, " +
    ".family-card, " +
    ".hobby-card, " +
    ".contact-card"
);


if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    // Show content normally if IntersectionObserver is unavailable

    revealElements.forEach(function (element) {

        element.classList.add("visible");

    });

}



/* =========================================
   6. CONSOLE MESSAGE
========================================= */

console.log("Girivasan's Portfolio Loaded Successfully!");

/* =========================================
   7. DARK AND LIGHT THEME TOGGLE
========================================= */

const themeToggle = document.getElementById("theme-toggle");

const themeIcon = document.getElementById("theme-icon");


// Apply the selected theme

function applyTheme(theme) {

    document.documentElement.setAttribute("data-theme", theme);

    if (theme === "dark") {

        themeIcon.textContent = "☀️";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light theme"
        );

    } else {

        themeIcon.textContent = "🌙";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark theme"
        );

    }

}


// Load saved theme, or use light mode by default

const savedTheme = localStorage.getItem("portfolio-theme");

applyTheme(savedTheme === "dark" ? "dark" : "light");


// Switch theme when button is clicked

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        const newTheme =
            currentTheme === "dark" ? "light" : "dark";

        applyTheme(newTheme);

        localStorage.setItem("portfolio-theme", newTheme);

    });

}