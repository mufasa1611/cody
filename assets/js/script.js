document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            // Remove active class from other links
            navLinks.forEach(function(innerLink) {
                innerLink.classList.remove("active");
            });

            // Add active class to clicked link
            this.classList.add("active");
        });
    });
});
