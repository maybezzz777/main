document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".change", {
        strings: ["Racist", "Horny", "Homophobic", "Acoustic", "Sexist"],
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

