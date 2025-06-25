
// Módulo de animações
export class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.enhanceSkillCards();
        this.animateTimeline();
        this.enhanceButtons();
        this.addAnimationStyles();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
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

        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            observer.observe(section);
            
            const cards = section.querySelectorAll('.skill-card, .project-card, .certification-card, .content-box');
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
        });
    }

    enhanceSkillCards() {
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.skill-icon');
                const iconElement = icon.querySelector('i');
                
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
                iconElement.style.color = 'white';
                iconElement.style.transform = 'scale(1.1)';
                
                card.style.boxShadow = '0 12px 32px rgba(99, 102, 241, 0.2)';
            });
            
            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.skill-icon');
                const iconElement = icon.querySelector('i');
                
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.background = 'linear-gradient(135deg, #eef2ff, #ddd6fe)';
                iconElement.style.color = '#6366f1';
                iconElement.style.transform = 'scale(1)';
                
                card.style.boxShadow = '';
            });
        });
    }

    animateTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.3 });

        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
            item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(item);
        });
    }

    enhanceButtons() {
        const buttons = document.querySelectorAll('.contact-button, .social-link, .project-link');
        
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
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
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}
