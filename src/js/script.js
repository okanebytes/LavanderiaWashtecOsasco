   function toggleMenu() {
            const menu = document.getElementById('menuItems');
            const isVisible = menu.style.display === 'flex';
            menu.style.display = isVisible ? 'none' : 'flex';
        }