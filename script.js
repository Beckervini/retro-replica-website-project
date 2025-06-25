
// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links and sections
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.querySelector('.sidebar');

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (sidebar.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
            resetMobileMenuIcon();
        }
    });

    function resetMobileMenuIcon() {
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }

    // Enhanced scroll-based navigation for continuous scrolling
    function updateActiveSection() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`a[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section's link
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    // Smooth scroll to section when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 1024) {
                    sidebar.classList.remove('active');
                    resetMobileMenuIcon();
                }
            }
        });
    });

    // Listen for scroll events to update active navigation
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveSection, 10);
    });

    // Initialize active section on page load
    updateActiveSection();

    // Enhanced animations for cards with intersection observer
    function setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Add staggered animation for multiple cards
                    const cards = entry.target.querySelectorAll('.skill-card, .project-card, .certification-card, .content-box');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        // Observe all sections
        sections.forEach(section => {
            observer.observe(section);
            
            // Set initial state for cards
            const cards = section.querySelectorAll('.skill-card, .project-card, .certification-card, .content-box');
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
        });
    }

    // Initialize intersection observer
    setupIntersectionObserver();

    // Enhanced skill card hover effects
    function enhanceSkillCards() {
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.skill-icon');
                const iconElement = icon.querySelector('i');
                
                // Icon animations
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
                iconElement.style.color = 'white';
                iconElement.style.transform = 'scale(1.1)';
                
                // Add subtle glow effect
                this.style.boxShadow = '0 12px 32px rgba(99, 102, 241, 0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.skill-icon');
                const iconElement = icon.querySelector('i');
                
                // Reset icon animations
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.background = 'linear-gradient(135deg, #eef2ff, #ddd6fe)';
                iconElement.style.color = '#6366f1';
                iconElement.style.transform = 'scale(1)';
                
                // Reset glow effect
                this.style.boxShadow = '';
            });
        });
    }

    // Initialize skill card enhancements
    enhanceSkillCards();

    // Enhanced timeline animation
    function animateTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, {
            threshold: 0.3
        });

        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
            item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(item);
        });
    }

    // Initialize timeline animation
    animateTimeline();

    // Enhanced button click effects with ripple
    function enhanceButtons() {
        const buttons = document.querySelectorAll('.contact-button, .social-link, .project-link');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Create ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.5)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.pointerEvents = 'none';
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Add ripple animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .fade-in-up {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        .slide-in-left {
            animation: slideInFromLeft 0.6s ease forwards;
        }
        
        .slide-in-right {
            animation: slideInFromRight 0.6s ease forwards;
        }
    `;
    document.head.appendChild(style);

    // Initialize button enhancements
    enhanceButtons();

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            scrollToNextSection();
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            scrollToPreviousSection();
        }
    });

    function scrollToNextSection() {
        const currentSection = getCurrentSection();
        const nextSection = currentSection.nextElementSibling;
        
        if (nextSection && nextSection.classList.contains('section')) {
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function scrollToPreviousSection() {
        const currentSection = getCurrentSection();
        const previousSection = currentSection.previousElementSibling;
        
        if (previousSection && previousSection.classList.contains('section')) {
            previousSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function getCurrentSection() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        for (let section of sections) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                return section;
            }
        }
        
        return sections[0]; // Return first section as fallback
    }

    // Performance optimization: Debounce resize events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Handle window resize
    const handleResize = debounce(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 1024) {
            sidebar.classList.remove('active');
            resetMobileMenuIcon();
        }
        
        // Recalculate active section on resize
        updateActiveSection();
    }, 250);

    window.addEventListener('resize', handleResize);

    // Console log for debugging
    console.log('Enhanced portfolio website loaded successfully!');
    console.log('Continuous scroll and enhanced hover effects enabled');
    console.log('Current active section:', document.querySelector('.nav-link.active')?.getAttribute('href') || 'none');
});
