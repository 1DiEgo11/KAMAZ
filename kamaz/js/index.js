const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.higth = 'auto';
    });
    Slide();
};

window.addEventListener('resize', init);
init();

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

function Slide() {
    setTimeout(Slide, 10000);
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
}

// var count = 0;
// function Slide() {
//     setTimeout(Slide, 1500);
//     var x;
//     const images = document.querySelectorAll('.slider .slider-line img');
//     for (x = 0; x < images.length; x++) {
//         images[x].style.display = 'none';
//     }
//     count++
//     if (count > images.length) { count = 1 }
//     images[count - 1].style.display = "block";
// }

// Slide();
