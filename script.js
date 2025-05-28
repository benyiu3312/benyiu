document.addEventListener('DOMContentLoaded', function() {
        enableLightbox();
    const currentPage = document.body.getAttribute('data-page');
    if (currentPage === 'index') {
        showQuickTourImages();
    } else if (currentPage === 'finished-works') {
        showFinishedWorkImages();
    } else if (currentPage === 'fan-arts') {
        showFanArtsImages();
    } else if (currentPage === 'concepts') {
        showConceptsImages();
    } else if (currentPage === 'traditional-works') {
        showTraditionalWorksImages();
    }

    // Contact form handler (if present)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const postSubmitMessage = document.getElementById('postSubmitMessage');
            if (postSubmitMessage) {
                postSubmitMessage.style.display = 'block';
            }
        });
    }
});

function showTraditionalWorksImages() {
    const images = [
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
    const grid = document.getElementById('traditionalWorksGrid');
    if (!grid) return;
    images.forEach(filename => {
        const img = document.createElement('img');
        img.src = `tw images/${filename}`;
        img.alt = filename;
        grid.appendChild(img);
    });
}

function showConceptsImages() {
    const images = [
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
    const grid = document.getElementById('conceptsGrid');
    if (!grid) return;
    images.forEach(filename => {
        const img = document.createElement('img');
        img.src = `concepts images/${filename}`;
        img.alt = filename;
        grid.appendChild(img);
    });
}

function showFanArtsImages() {
    const images = [
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
    const grid = document.getElementById('fanArtsGrid');
    if (!grid) return;
    images.forEach(filename => {
        const img = document.createElement('img');
        img.src = `fan art images/${filename}`;
        img.alt = filename;
        grid.appendChild(img);
    });
}

function showQuickTourImages() {
    const images = [
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
    const grid = document.getElementById('quickTourGrid');
    if (!grid) return;
    images.forEach(filename => {
        const img = document.createElement('img');
        img.src = `quick tour images/${filename}`;
        img.alt = filename;
        grid.appendChild(img);
    });
}

function showFinishedWorkImages() {
    const images = [
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
    const grid = document.getElementById('finishedWorksGrid');
    if (!grid) return;
    images.forEach(filename => {
        const img = document.createElement('img');
        img.src = `finished work images/${filename}`;
        img.alt = filename;
        grid.appendChild(img);
    });
}

// Lightbox function
function enableLightbox() {
    const grids = ['quickTourGrid', 'finishedWorksGrid','fanArtsGrid', 'conceptsGrid', 'traditionalWorksGrid'];
    const overlay = document.getElementById('lightboxOverlay');
    const overlayImg = document.getElementById('lightboxImg');
    const overlayClose = document.getElementById('lightboxClose');
    if (!overlay || !overlayImg || !overlayClose) return;

    grids.forEach(gridId => {
        const grid = document.getElementById(gridId);
        if (!grid) return;

        grid.addEventListener('click', function(e) {
            if (e.target.tagName === 'IMG') {
                overlayImg.src = e.target.src;
                overlayImg.alt = e.target.alt;
                overlay.classList.add('active');
            }
        });
    });

    overlayClose.addEventListener('click', function() {
        overlay.classList.remove('active');
        overlayImg.src = '';
        overlayImg.alt = '';
    });

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            overlayImg.src = '';
            overlayImg.alt = '';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
            overlayImg.src = '';
            overlayImg.alt = '';
        }
    });
}