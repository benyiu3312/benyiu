function loadImages() {
    const slidesContainer = document.getElementById('slides-container');
    slidesContainer.innerHTML = ''; // Clear existing images

    let imageFilenames = [];
    let imageDirectory = '';

    if (window.location.pathname.includes('finished-works.html')) {
        imageFilenames = [
            "finished1.jpg",
            "finished2.jpeg",
            "finished2.png",
            "finished3.jpg",
            "VS--04bilibili-47’37”.jpg",
            "VS--04bilibili-49’44”.jpg",
            "VS--04bilibili-51’20”.jpg",
            "VS--04bilibili-53’25”.jpg",
            "VS--04bilibili-54’46”.jpg",
            "VS--06bilibili-56’32”.jpg",
            "VS--06bilibili-93’08”.jpg",
            "VS--06zbrushbilibili-48’04”.jpg",
            "VS--06zbrushbilibili-48’47”.jpg",
            "VS--06zbrushbilibili-63’27”.jpg",
            "VS--06zbrushbilibili-78’04”.jpg",
            "VS--06zbrushbilibili-83’32”.jpg",
            "VS--06zbrushbilibili-126’28”.jpg",
            "VS--07bilibili-46’02”.jpg",
            "VS--07bilibili-73’11”.jpg",
            "VS--07bilibili-84’12”.jpg",
            "VS--YouTube-KingGnu--0’38”.jpg",
            "VS--YouTube-KingGnu--1’59”.jpg"
        ];
        imageDirectory = 'finished work images';
    } else if (window.location.pathname.includes('traditional-works.html')) {
        imageFilenames = [
            "0D0E1A78-1F00-4722-AA39-045BB7B53250_1_105_c.png",
            "1F717841-9BC9-4C04-BE06-701DFA8A9FF0_1_201_a.png",
            "3.jpg",
            "4.jpg",
            "5.jpg",
            "326A3E9C-926D-4B7C-9964-2DA2CA062186.png",
            "6408AA2A-2B53-4842-ACE4-9D0AFAD2BA45.png",
            "BAE552CD-1C40-4788-8DF4-8CCED475433E_1_105_c.png",
            "cc.jpg",
            "twww.jpg"
        ];
        imageDirectory = 'tw images';
    } else if (window.location.pathname.includes('fan-arts.html')) {
        imageFilenames = [
            "fanart1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg",
            "螢幕截圖 2023-04-23 下午2.59.35.png",
            "螢幕截圖 2023-04-23 下午2.59.44.png",
            "螢幕截圖 2023-04-23 下午2.59.51.png",
            "螢幕截圖 2023-04-23 下午2.59.59.png",
            "螢幕截圖 2023-04-23 下午3.00.08.png",
            "螢幕截圖 2023-04-23 下午3.00.16.png",
            "螢幕截圖 2023-04-23 下午3.00.23.png",
            "螢幕截圖 2023-04-23 下午3.00.32.png",
            "螢幕截圖 2023-04-23 下午3.00.40.png"
        ];
        imageDirectory = 'fan art images';
    } else if (window.location.pathname.includes('concepts.html')) {
        imageFilenames = [
            "2.webp",
            "3.webp",
            "4.webp",
            "8a6f1c3b5e37bdb0cb225cfc5cdb9c8a.jpg",
            "060e27133c7dc1c85c42d020d247229f (1).jpg",
            "0199.jpg",
            "0200.jpg",
            "800px-Bogumil_Dawison_as_Richard_III_by_Friedrich_von_Amerling.jpg",
            "860x394.jpg",
            "2016 5 5.jpg",
            "2016 5 5a.jpg",
            "109548436.webp",
            "螢幕截圖 2023-12-10 上午11.59.11.png",
            "螢幕截圖 2024-03-12 下午9.19.03.png",
            "螢幕截圖 2024-03-25 下午5.10.24.png",
            "螢幕截圖 2024-04-25 下午9.18.10.png",
            "a03c4da78e69d379a0f9d2d8f8b52b69.jpg",
            "a46f77a6343d944f68fe70e54d0360ef.jpg",
            "b1fea87a1253374c4b66a37f451c60f2.jpg",
            "b549fcdb0b0f20edc6a1563922873dc4.jpg",
            "c932197279df1147cf65b7b2c46ed47a.jpg",
            "concept1.webp",
            "CVN-78-photo-002.jpg",
            "CVN-78-photo-003.jpg",
            "CVN-78-photo-004.jpg",
            "CVN-78-photo-005.jpg",
            "CVN-78-photo-036.jpg",
            "debce507f50fa98987b300ed29ad486d.jpg",
            "Gaga_at_bazaar.jpg",
            "IMG_1758.JPG",
            "IMG_5533.JPG",
            "IMG_6721.JPG",
            "PR_San_Juan_-_Copy.jpg",
            "San Juan in the 1900s (1).jpg",
            "San Juan in the 1900s (1).png",
            "San Juan in the 1900s (2).jpg",
            "San Juan in the 1900s (3).jpg",
            "San Juan in the 1900s (6).jpg",
            "San Juan in the 1900s (8).jpg",
            "San Juan in the 1900s (15).jpg",
            "San Juan in the 1900s (25).jpg",
            "Snapinsta.app_417276076_369361049016471_5567416195074193717_n_1080.jpg"
        ];
        imageDirectory = 'concepts images';
    } else {
        imageFilenames = [
            "004.webp",
            "12.jpeg",
            "23.png",
            "027.webp",
            "112.jpg",
            "245.png",
            "331.jpeg",
            "332.png",
            "411.png",
            "444.jpg",
            "515.jpeg",
            "1284.jpeg",
            "326418427_761303508662324_8176855720314047322_n.png",
            "螢幕截圖 2024-01-31 下午2.08.29.png",
            "螢幕截圖 2024-02-03 下午10.15.17.png",
            "螢幕截圖 2024-02-08 上午11.49.38.png",
            "螢幕截圖 2024-02-08 下午10.14.25.png",
            "螢幕截圖 2024-02-08 下午10.15.20.png",
            "螢幕截圖 2024-02-08 下午10.23.06.png",
            "螢幕截圖 2024-02-08 下午10.28.47.png",
            "螢幕截圖 2024-02-08 下午10.28.56.png",
            "螢幕截圖 2024-02-08 下午10.30.21.png",
            "螢幕截圖 2024-02-08 下午10.31.55.png",
            "螢幕截圖 2024-02-08 下午10.32.05.png",
            "cindy.png",
            "rr.jpeg"
        ];
        imageDirectory = 'quick tour images';
    }

    imageFilenames.forEach(filename => {
        const img = document.createElement('img');
        img.src = `${imageDirectory}/${filename}`; // Directly set the src attribute
        img.alt = `Image ${filename}`;
        slidesContainer.appendChild(img);
    });

    showSlides(slideIndex); // Initialize the slider with the new images
}

document.addEventListener('DOMContentLoaded', function() {
    loadImages();
});

let slideIndex = 0;
function showSlides(n) {
    const slides = document.querySelectorAll('.slides img');
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Load images and initialize slider
loadImages();

function toggleLightbox(button) {
    const lightbox = document.getElementById('lightbox');

    if (lightbox.style.display === 'block') {
        closeLightbox(button);
    } else {
        openLightbox(button);
    }
}

function openLightbox(button) {
    const lightbox = document.getElementById('lightbox');
    const grid = document.getElementById('lightbox-grid');

    // Clear existing images
    grid.innerHTML = '';

    // Load images into the grid
    const images = document.querySelectorAll('#slides-container img');
    const uniqueImages = new Set(); // Use a Set to store unique image sources

    images.forEach(function(img, index) {
        if (!uniqueImages.has(img.src)) {
            uniqueImages.add(img.src); // Add the image source to the Set

            const newImg = document.createElement('img');
            newImg.src = img.src;
            newImg.alt = img.alt;
            newImg.dataset.index = index; // Store the index of the image
            newImg.addEventListener('click', function() {
                showSlide(index + 1); // Show the corresponding slide
                closeLightbox(button); // Close the lightbox
            });
            grid.appendChild(newImg);
        }
    });

    // Show the lightbox
    lightbox.style.display = 'block';

    // Change the button to a close button
    button.innerHTML = '&#10005;'; // Use a different symbol for the close button
    button.classList.add('close');
}

function closeLightbox(button) {
    const lightbox = document.getElementById('lightbox');

    // Hide the lightbox
    lightbox.style.display = 'none';

    // Change the button back to an open button
    button.innerHTML = '<i class="fa fa-th-large" aria-hidden="true"></i>';
    button.classList.remove('close');
}

function showSlide(n) {
    const slides = document.querySelectorAll('#slides-container img');
    if (n > slides.length) { n = 1 }
    if (n < 1) { n = slides.length }
    slides.forEach(function(slide, index) {
        slide.style.display = (index + 1 === n) ? 'block' : 'none';
    });
}

function plusSlides(n) {
    const currentSlide = Array.from(document.querySelectorAll('#slides-container img')).findIndex(function(slide) {
        return slide.style.display === 'block';
    });
    showSlide(currentSlide + 1 + n);
}

// Load images and initialize slider
loadImages();
showSlide(1);

document.getElementById('lightboxButton').addEventListener('click', function() {
    toggleLightbox(this);
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the post-submit message
    document.getElementById('postSubmitMessage').style.display = 'block';

    // Optionally, you can submit the form via AJAX here or redirect the user
    // For example, using fetch to submit the form data:
    /*
    const formData = new FormData(this);
    fetch('submit_form.php', {
        method: 'POST',
        body: formData
    }).then(response => response.text())
      .then(data => {
          console.log(data); // Handle the response data
      }).catch(error => {
          console.error('Error:', error);
      });
    */
});