document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".change", {
        strings: ["Web Developer", "Idiot", "IT Specialist", "Autist"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('nav-toggle');
    checkbox.addEventListener('change', function () {
        document.body.classList.toggle('hide-content', checkbox.checked);
    });
});

