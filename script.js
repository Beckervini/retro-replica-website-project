
// Script principal - apenas importa e inicializa os módulos
import { NavigationManager } from './js/navigation.js';
import { MobileMenuManager } from './js/mobile-menu.js';
import { AnimationManager } from './js/animations.js';
import { Utils } from './js/utils.js';

document.addEventListener('DOMContentLoaded', function() {
    // Inicializa todos os módulos
    const navigation = new NavigationManager();
    const mobileMenu = new MobileMenuManager();
    const animations = new AnimationManager();

    // Handle window resize com debounce
    const handleResize = Utils.debounce(() => {
        if (window.innerWidth > 1024) {
            mobileMenu.closeMenu();
        }
        navigation.updateActiveSection();
    }, 250);

    window.addEventListener('resize', handleResize);

    // Remove qualquer CSS que possa estar causando snap
    const style = document.createElement('style');
    style.textContent = `
        html {
            scroll-behavior: auto !important;
        }
        
        body {
            overflow-x: hidden;
            overflow-y: auto !important;
        }
        
        .main-content {
            scroll-snap-type: none !important;
        }
        
        .section {
            scroll-snap-align: none !important;
        }
    `;
    document.head.appendChild(style);

    console.log('Portfolio com scroll livre carregado com sucesso!');
    console.log('Módulos separados inicializados');
});
