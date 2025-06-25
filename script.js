
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
    
    // Forçar estilos para garantir funcionamento
    const style = document.createElement('style');
    style.innerHTML = `
        body {
            padding-top: 70px !important;
        }
        
        .fixed-header {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 2000 !important;
            background: rgba(255, 255, 255, 0.95) !important;
            backdrop-filter: blur(10px) !important;
        }
        
        .sidebar {
            position: fixed !important;
            top: 70px !important;
            height: calc(100vh - 70px) !important;
        }
        
        .main-content {
            margin-left: 280px !important;
        }
        
        @media (max-width: 1024px) {
            .main-content {
                margin-left: 0 !important;
            }
            
            .sidebar {
                transform: translateX(-100%) !important;
            }
            
            .sidebar.active {
                transform: translateX(0) !important;
            }
        }
    `;
    document.head.appendChild(style);

    console.log('Portfolio carregado com sucesso!');
    console.log('Cabeçalho fixo ativo');
    console.log('Navegação lateral estilizada');
});
