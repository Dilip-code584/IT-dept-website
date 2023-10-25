// Image Slider
const sliderImages = document.querySelectorAll('.slider-image');
let currentImageIndex = 0;

function changeImage(index) {
    sliderImages[currentImageIndex].style.display = 'none';
    sliderImages[index].style.display = 'block';
    currentImageIndex = index;
}

function nextImage() {
    const nextIndex = (currentImageIndex + 1) % sliderImages.length;
    changeImage(nextIndex);
}

function previousImage() {
    const previousIndex = (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
    changeImage(previousIndex);
}

document.querySelector('#next-button').addEventListener('click', nextImage);
document.querySelector('#previous-button').addEventListener('click', previousImage);

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust the scroll position to accommodate the header
                behavior: 'smooth',
            });
        }
    });
});
