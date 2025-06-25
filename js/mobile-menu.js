
// Módulo do menu mobile
export class MobileMenuManager {
    constructor() {
        this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
        this.sidebar = document.querySelector('.sidebar');
        this.init();
    }

    init() {
        this.setupToggle();
        this.setupOutsideClick();
    }

    setupToggle() {
        this.mobileMenuToggle.addEventListener('click', () => {
            this.sidebar.classList.toggle('active');
            this.animateHamburger();
        });
    }

    setupOutsideClick() {
        document.addEventListener('click', (e) => {
            if (!this.sidebar.contains(e.target) && !this.mobileMenuToggle.contains(e.target)) {
                this.sidebar.classList.remove('active');
                this.resetHamburgerIcon();
            }
        });
    }

    animateHamburger() {
        const spans = this.mobileMenuToggle.querySelectorAll('span');
        if (this.sidebar.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            this.resetHamburgerIcon();
        }
    }

    resetHamburgerIcon() {
        const spans = this.mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }

    closeMenu() {
        if (window.innerWidth <= 1024) {
            this.sidebar.classList.remove('active');
            this.resetHamburgerIcon();
        }
    }
}
