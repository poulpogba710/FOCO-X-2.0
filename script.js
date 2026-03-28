document.addEventListener("DOMContentLoaded", () => {
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered delays for children if needed
                const children = entry.target.querySelectorAll('.delay-on-scroll');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, index * 200);
                });

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.slide-up-scroll').forEach(section => {
        observer.observe(section);
    });

    // Subtly parallax background glow based on mouse movement
    const glow = document.querySelector('.glow-bg');
    if (glow) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            // Move glow slightly in opposite direction of mouse
            glow.style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
        });
    }

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Glitch Effect logic on scroll (optional specific trigger)
    const glitchText = document.querySelector('.glitch-text');
    if (glitchText) {
        setInterval(() => {
            if (Math.random() > 0.8) {
                glitchText.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
                glitchText.style.textShadow = `
                    ${Math.random() * 5}px 0 rgba(255,0,0,0.8),
                    -${Math.random() * 5}px 0 rgba(0,255,255,0.8)
                `;
                
                setTimeout(() => {
                    glitchText.style.transform = 'translate(0,0)';
                    glitchText.style.textShadow = 'none';
                }, 100);
            }
        }, 1000);
    }

    // Particles Canvas (Bolinhas flutuantes)
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        
        function resize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: -(Math.random() * 0.8 + 0.2), // Move upwards
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.3
            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                
                if (p.y < 0) p.y = canvas.height;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 240, 255, ${p.opacity})`;
                ctx.shadowBlur = 8;
                ctx.shadowColor = '#00f0ff';
                ctx.fill();
            });
            requestAnimationFrame(draw);
        }
        draw();
    }

    // Upsell Modal Logic
    const basicPlanBtn = document.getElementById('basicPlanBtn');
    const upsellModal = document.getElementById('upsellModal');

    if (basicPlanBtn && upsellModal) {
        basicPlanBtn.addEventListener('click', (e) => {
            e.preventDefault();
            upsellModal.classList.add('active');
        });
        
        // Optional: Close modal if they click outside of content (on the overlay)
        upsellModal.addEventListener('click', (e) => {
            if (e.target === upsellModal) {
                upsellModal.classList.remove('active');
            }
        });
    }
    // FAQ Accordion Logic
    const faqBoxes = document.querySelectorAll('.faq-q-box');
    faqBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const row = box.parentElement;
            const content = row.querySelector('.faq-a-wrapper');
            const isActive = row.classList.contains('active');

            // Close all other accordions
            document.querySelectorAll('.faq-row.accordion').forEach(otherRow => {
                otherRow.classList.remove('active');
                const otherContent = otherRow.querySelector('.faq-a-wrapper');
                if (otherContent) otherContent.style.maxHeight = null;
            });

            if (!isActive) {
                row.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
