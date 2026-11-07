/**
 * Main JavaScript for Tanwirul Fuadi's Portfolio
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Typing Animation
    initTypingEffect();

    // 2. Mobile Menu
    initMobileMenu();

    // 3. Contact Form WhatsApp Generator
    initContactForm();

    // 4. Scroll spy & Header styling
    initScrollSpy();

    // 5. Smooth Scroll
    initSmoothScroll();
});

// --- TYPING EFFECT ---
function initTypingEffect() {
    const textElement = document.getElementById("typing-text");
    if (!textElement) return;

    const phrases = [
        "Mahasiswa Aktif & Tech Enthusiast",
        "Junior Web & Software Developer",
        "Frontend & UI/UX Explorer"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 90;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 1800; // jeda saat selesai mengetik
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 400; // jeda sebelum kata berikutnya
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// --- MOBILE MENU ---
function initMobileMenu() {
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

    if (!mobileBtn || !mobileMenu) return;

    mobileBtn.addEventListener("click", () => {
        const isHidden = mobileMenu.classList.contains("hidden");
        if (isHidden) {
            mobileMenu.classList.remove("hidden");
            mobileBtn.innerHTML = `<i class="fa-solid fa-xmark text-xl"></i>`;
        } else {
            mobileMenu.classList.add("hidden");
            mobileBtn.innerHTML = `<i class="fa-solid fa-bars text-xl"></i>`;
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            mobileBtn.innerHTML = `<i class="fa-solid fa-bars text-xl"></i>`;
        });
    });
}

// --- CONTACT FORM HANDLER (Direct to WhatsApp) ---
function initContactForm() {
    const form = document.getElementById("portfolio-contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("sender-name").value.trim();
        const email = document.getElementById("sender-email").value.trim();
        const subject = document.getElementById("sender-subject").value.trim();
        const message = document.getElementById("sender-message").value.trim();

        // Target nomor WhatsApp (Ganti dengan nomor WhatsApp Tanwirul Fuadi)
        const waNumber = "6283894384348"; // Ganti dengan nomor asli berformat internasional tanpa tanda '+'

        // Format pesan WhatsApp
        const waText = `Halo Tanwirul Fuadi, perkenalkan saya *${name}* (${email}).%0A%0A*Hal:* ${subject}%0A*Pesan:*%0A${message}%0A%0A_Terkirim dari Website Portofolio_`;

        // Direct ke WhatsApp API
        const waUrl = `https://wa.me/${waNumber}?text=${waText}`;
        window.open(waUrl, "_blank");

        // Tampilkan feedback notifikasi sederhana
        const alertBox = document.getElementById("contact-feedback");
        if (alertBox) {
            alertBox.classList.remove("hidden");
            setTimeout(() => {
                alertBox.classList.add("hidden");
                form.reset();
            }, 4000);
        }
    });
}

// --- SCROLL SPY & NAVBAR STYLING ---
function initScrollSpy() {
    const header = document.getElementById("main-header");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-desktop-link");
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        const scrollY = window.pageYOffset;

        // Navbar blur change
        if (scrollY > 50) {
            header?.classList.add("shadow-lg", "shadow-black/20");
        } else {
            header?.classList.remove("shadow-lg", "shadow-black/20");
        }

        // Back to top button visibility
        if (backToTopBtn) {
            if (scrollY > 400) {
                backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
                backToTopBtn.classList.add("opacity-100", "pointer-events-auto");
            } else {
                backToTopBtn.classList.add("opacity-0", "pointer-events-none");
                backToTopBtn.classList.remove("opacity-100", "pointer-events-auto");
            }
        }

        // Active section highlight
        sections.forEach(sec => {
            const sectionHeight = sec.offsetHeight;
            const sectionTop = sec.offsetTop - 120;
            const sectionId = sec.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("text-blue-400", "font-semibold");
                    link.classList.add("text-slate-300");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("text-blue-400", "font-semibold");
                        link.classList.remove("text-slate-300");
                    }
                });
            }
        });
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}

// --- SMOOTH SCROLL ---
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
