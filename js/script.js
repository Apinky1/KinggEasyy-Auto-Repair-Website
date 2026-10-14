// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}


// =========================
// MERCH - SHIRT 1
// =========================

const shirt1Color = document.getElementById("shirt1-color");
const shirt1Image = document.getElementById("shirt1-image");

if (shirt1Color && shirt1Image) {
    shirt1Color.addEventListener("change", function () {

        if (shirt1Color.value === "white") {
            shirt1Image.src = "images/merch/Shirt-design-1-white.png";
        } else {
            shirt1Image.src = "images/merch/Shirt-design-1.PNG";
        }

    });
}


// =========================
// MERCH - SHIRT 2
// =========================

const shirt2Color = document.getElementById("shirt2-color");
const shirt2Image = document.getElementById("shirt2-image");

if (shirt2Color && shirt2Image) {
    shirt2Color.addEventListener("change", function () {

        if (shirt2Color.value === "white") {
            shirt2Image.src = "images/merch/Shirt-design-2-white.png";
        } else {
            shirt2Image.src = "images/merch/Shirt-design-2.PNG";
        }

    });
}


// =========================
// MERCH - SHIRT 3
// =========================

const shirt3Color = document.getElementById("shirt3-color");
const shirt3Image = document.getElementById("shirt3-image");

if (shirt3Color && shirt3Image) {
    shirt3Color.addEventListener("change", function () {

        if (shirt3Color.value === "white") {
            shirt3Image.src = "images/merch/Shirt-design-3-white.png";
        } else {
            shirt3Image.src = "images/merch/Shirt-design-3.PNG";
        }

    });
}


// =========================
// MERCH - SHIRT 4
// =========================

const shirt4Color = document.getElementById("shirt4-color");
const shirt4Image = document.getElementById("shirt4-image");

if (shirt4Color && shirt4Image) {
    shirt4Color.addEventListener("change", function () {

        if (shirt4Color.value === "white") {
            shirt4Image.src = "images/merch/Shirt-design-4-white.png";
        } else {
            shirt4Image.src = "images/merch/Shirt-design-4.PNG";
        }

    });
}