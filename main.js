var typed = new Typed(".text", {
    strings: ["Web Developer", "Software Developer", "Problem Solver", "Quick Learner"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Contact Form Demo (for GitHub Pages)
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message submitted successfully (Demo Mode)");
});