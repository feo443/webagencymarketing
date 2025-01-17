import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Animaciones del header y hero (sin cambios)
    gsap.from('header', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Animación del hero
    const heroTimeline = gsap.timeline();
    heroTimeline
        .from('.hero-title', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.hero-description', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-cta', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.3')
        .from('.hero-card', {
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4');

    // Animaciones de las tarjetas de diferenciales
    const cards = document.querySelectorAll('#diferenciais .bg-white');
    cards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // Animación de la sección Programa
    const programaTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#programa',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    programaTimeline
        .from('#programa h2', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from('#programa .lg\\:w-1\\/2:first-child > *:not(h2)', {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out'
        }, '-=0.4')
        .from('#programa .lg\\:w-1\\/2:last-child', {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6');

    // Animación de la sección História
    const historiaTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#historia',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    historiaTimeline
        .from('#historia h2, #historia > div > p', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        })
        .from('#historia .grid.grid-cols-1.md\\:grid-cols-2 > div', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        }, '-=0.4')
        .from('#historia .mt-16 > div', {
            scale: 0.9,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out'
        }, '-=0.4');

    // Animación de la sección Contato
    const contatoTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#contato',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    contatoTimeline
        .from('#contato h2, #contato > div > p', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        })
        .from('#contato form > *', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out'
        }, '-=0.4')
        .from('#contato .bg-gray-50', {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6');

    // Animación del footer
    const footerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    });

    footerTimeline
        .from('footer .grid > div', {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out'
        })
        .from('footer .border-t', {
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.2');

    // Contador animado para las estadísticas
    const stats = document.querySelectorAll('#historia .mt-16 .text-4xl');
    stats.forEach(stat => {
        const value = stat.textContent;
        const endValue = parseInt(value);
        
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            textContent: 0,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            stagger: {
                each: 0.2,
                onUpdate: function() {
                    this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent) + (value.includes('+') ? '+' : '%');
                },
            }
        });
    });

    // Efecto parallax en elementos decorativos
    const decorativeElements = document.querySelectorAll('.decorative, .absolute');
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        decorativeElements.forEach((element) => {
            const moveX = (clientX - innerWidth / 2) * 0.05;
            const moveY = (clientY - innerHeight / 2) * 0.05;

            gsap.to(element, {
                x: moveX,
                y: moveY,
                duration: 1,
                ease: 'power3.out'
            });
        });
    });

    // Animación de la sección Testimonios
    const testimoniosTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#testimonios',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    testimoniosTimeline
        .from('#testimonios .text-center', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from('#testimonios .grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3 > div', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        }, '-=0.4')
        .from('#testimonios .mt-16 > div', {
            scale: 0.9,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out'
        }, '-=0.4');

    // Intersection Observer for section visibility
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.section-content').classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section-full').forEach(section => {
        sectionObserver.observe(section);
    });
}); 