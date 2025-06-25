
// Script principal - apenas importa e inicializa os módulos
import { NavigationManager } from './js/navigation.js';
import { MobileMenuManager } from './js/mobile-menu.js';
import { AnimationManager } from './js/animations.js';
import { Utils } from './js/utils.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando portfolio...');
    
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

    console.log('Portfolio carregado com sucesso!');
});
