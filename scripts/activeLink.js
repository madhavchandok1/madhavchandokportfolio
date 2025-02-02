document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".link-text");
    const sections = document.querySelectorAll(".section");

    function activateNavLink() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjust based on header height
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links and horizontal lines
                navLinks.forEach(link => {
                    link.classList.remove("link-active");
                    link.querySelector(".horizontal-line").classList.remove("horizontal-line-active");
                });

                // Add active class to the corresponding nav link
                const activeLink = document.querySelector(`.link-text[data-section="${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add("link-active");
                    activeLink.querySelector(".horizontal-line").classList.add("horizontal-line-active");
                }
            }
        });
    }

    window.addEventListener("scroll", activateNavLink);

    // Smooth scrolling on click
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("data-section");
            const section = document.getElementById(sectionId);

            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 75, // Adjust for fixed headers
                    behavior: "smooth"
                });
            }
        });
    });

    // Call function on load to highlight the correct nav item
    activateNavLink();
});