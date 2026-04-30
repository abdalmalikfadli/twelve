document.addEventListener('DOMContentLoaded', () => {
    // Background Image Rotation
    const images = [
        'assets/images/TWELVE-BG1.png',
        'assets/images/TWELVE-BG2.png',
        'assets/images/TWELVE-BG3.png'
    ];
    let currentImgIndex = 0;
    const bgContainer = document.getElementById('bg-container');

    if (bgContainer) {
        setInterval(() => {
            currentImgIndex = (currentImgIndex + 1) % images.length;
            bgContainer.style.backgroundImage = `url('${images[currentImgIndex]}')`;
        }, 3000);
    }

    // Language Toggle logic
    const langToggleBtn = document.getElementById('lang-toggle');
    const mainTitle = document.getElementById('main-title');

    function setLanguage(lang) {
        localStorage.setItem('lang', lang);
        
        if (lang === 'ar') {
            if (mainTitle) {
                mainTitle.innerHTML = '<span class="text-[#3890c9]">قريباً</span>';
                mainTitle.style.fontFamily = "'Tajawal', sans-serif";
            }
            if (langToggleBtn) {
                langToggleBtn.innerText = 'En';
                langToggleBtn.style.right = 'auto';
                langToggleBtn.style.left = '1.5rem';
            }
            document.documentElement.dir = 'rtl';
            document.documentElement.lang = 'ar';
        } else {
            if (mainTitle) {
                mainTitle.innerHTML = '<span class="text-[#3890c9]">Coming</span> Soon';
                mainTitle.style.fontFamily = "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";
            }
            if (langToggleBtn) {
                langToggleBtn.innerText = 'Ar';
                langToggleBtn.style.left = 'auto';
                langToggleBtn.style.right = '1.5rem';
            }
            document.documentElement.dir = 'ltr';
            document.documentElement.lang = 'en';
        }
    }

    if (langToggleBtn && mainTitle) {
        langToggleBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('lang') || 'en';
            setLanguage(currentLang === 'en' ? 'ar' : 'en');
        });

        // Initialize from local storage
        const savedLang = localStorage.getItem('lang') || 'en';
        setLanguage(savedLang);
    }
});
