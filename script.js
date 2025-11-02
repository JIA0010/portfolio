// ===================================
// Smooth Scroll & Navigation
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }

    // Navigation background on scroll
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
    });
});

// ===================================
// Scroll Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.project-card, .timeline-item, .skill-category, .contact-link'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// ===================================
// Scroll Progress Indicator (Optional)
// ===================================
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // You can add a progress bar element to show scroll progress
    // For now, this is just logging the progress
    // console.log(`Scrolled: ${scrolled}%`);
});

// ===================================
// Copy Email to Clipboard (Optional)
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const email = link.getAttribute('href').replace('mailto:', '');
            
            // Optional: Copy to clipboard functionality
            if (navigator.clipboard) {
                e.preventDefault();
                navigator.clipboard.writeText(email).then(() => {
                    // Show a temporary tooltip or notification
                    const originalText = link.innerHTML;
                    link.innerHTML = '<span style="color: #10b981;">✓ メールアドレスをコピーしました</span>';
                    
                    setTimeout(() => {
                        link.innerHTML = originalText;
                    }, 2000);
                    
                    // Still open email client
                    setTimeout(() => {
                        window.location.href = `mailto:${email}`;
                    }, 500);
                });
            }
        });
    });
});

// ===================================
// Typing Animation for Hero (Optional)
// ===================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing animation
// document.addEventListener('DOMContentLoaded', () => {
//     const tagline = document.querySelector('.hero-tagline');
//     if (tagline) {
//         const text = tagline.textContent;
//         typeWriter(tagline, text, 50);
//     }
// });

// ===================================
// Performance: Lazy Loading Images
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
});

// ===================================
// Dark Mode Toggle (Optional - for future enhancement)
// ===================================
// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');
//     localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
// }

// document.addEventListener('DOMContentLoaded', () => {
//     if (localStorage.getItem('darkMode') === 'true') {
//         document.body.classList.add('dark-mode');
//     }
// });
