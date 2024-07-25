let slideIndex = 1;
showSlides(slideIndex);

// Fungsi untuk berpindah slide berikutnya atau sebelumnya
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Fungsi untuk berpindah ke slide tertentu berdasarkan dot
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Loop untuk menyembunyikan semua slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Hapus kelas active dari semua dot
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Tampilkan slide yang sesuai dan tambahkan kelas active pada dot
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Auto play slideshow setiap 5 detik
setInterval(() => {
    plusSlides(1);
}, 5000);