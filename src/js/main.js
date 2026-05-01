// SEO in Sydney - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded', isOpen);
            mobileMenu.setAttribute('aria-hidden', !isOpen);
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars', !isOpen);
            icon.classList.toggle('fa-times', isOpen);
        });
        
        // Close mobile menu when clicking a link (not accordion btn)
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Mobile Locations Accordion
    const accordionBtn = document.querySelector('.mobile-accordion-btn');
    if (accordionBtn) {
        accordionBtn.addEventListener('click', function() {
            const body = this.nextElementSibling;
            const isOpen = body.classList.toggle('is-open');
            this.setAttribute('aria-expanded', isOpen);
        });
    }

    // Mega menu: close on click outside (desktop)
    const megamenuItems = document.querySelectorAll('.has-megamenu');
    document.addEventListener('click', function(e) {
        megamenuItems.forEach(item => {
            if (!item.contains(e.target)) {
                item.classList.remove('is-open');
            }
        });
    });

    // Mega menu: toggle on click (for keyboard/touch users)
    megamenuItems.forEach(item => {
        const trigger = item.querySelector(':scope > a');
        if (trigger) {
            trigger.addEventListener('click', function(e) {
                // Only intercept on non-hover capable devices
                if (window.matchMedia('(hover: none)').matches) {
                    e.preventDefault();
                    const isOpen = item.classList.toggle('is-open');
                    // Close others
                    megamenuItems.forEach(other => {
                        if (other !== item) other.classList.remove('is-open');
                    });
                }
            });
        }
    });

    // Close mega menu on Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            megamenuItems.forEach(item => item.classList.remove('is-open'));
        }
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                item.classList.toggle('active');
            });
        }
    });
    
    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const nav = document.querySelector('.nav');
                    const navHeight = nav ? nav.offsetHeight : 0;
                    window.scrollTo({
                        top: target.offsetTop - navHeight - 20,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Form input focus effects
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
    
    // Intersection Observer for scroll animations
    const animateElements = document.querySelectorAll('.service-card, .process-step, .content-block:not(.blog-article)');
    
    if (animateElements.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });
    }
});

