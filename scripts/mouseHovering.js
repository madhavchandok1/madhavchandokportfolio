const cursor = document.querySelector('.cursor');
        const glow = document.querySelector('.glow');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });

        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
            glow.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            glow.style.opacity = '0';
        });