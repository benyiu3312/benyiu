function loadImages() {
    const slidesContainer = document.getElementById('slides-container');
    slidesContainer.innerHTML = ''; // Clear existing images

    let imageFilenames = [];
    let imageDirectory = '';

    if (window.location.pathname.includes('finished-works.html')) {
        imageFilenames = [
            "finished1.jpg",
            "finished2.png",
            "finished3.jpg",
            // Add more filenames as needed
        ];
        imageDirectory = 'finished work images';
    } else if (window.location.pathname.includes('traditional-works.html')) {
        imageFilenames = [
            "twww.jpg",
            "5.jpg",
            "3.jpg",
            // Add more filenames as needed
        ];
        imageDirectory = 'tw images';
    } else if (window.location.pathname.includes('fan-arts.html')) {
        imageFilenames = [
            "fanart1.jpg",
            "2.jpg",
            "3.jpg",
            // Add more filenames as needed
        ];
        imageDirectory = 'fan art images';
    } else if (window.location.pathname.includes('concepts.html')) {
        imageFilenames = [
            "concept1.jpg",
            "2.png",
            "4.png",
            // Add more filenames as needed
        ];
        imageDirectory = 'concepts images';
    } else {
        imageFilenames = [
            "12.JPG",
            "23.png",
            "112.jpg",
            "1284.jpeg",
            "245.png",
            "331.JPG",
            "332.png",
            "411.png",
            "515.JPG",
            "1284.jpeg",
            "cindy.png",
            "rr.JPG",
            "444.jpg"
            // Add more filenames as needed
        ];
        imageDirectory = 'quick tour images';
    }

    imageFilenames.forEach(filename => {
        const img = document.createElement('img');
        img.src = `${imageDirectory}/${filename}`;
        img.alt = `Image ${filename}`;
        slidesContainer.appendChild(img);
    });

    showSlides(slideIndex); // Initialize the slider with the new images
}

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