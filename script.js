// Initialize AOS
AOS.init();

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

// Only run this code if the elements exist
if (cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
}

// Enhanced typing effect
new Typed('.typing-text', {
    strings: [
        'Web Developer',
        'Problem Solver',
        'UI/UX Enthusiast',
        'Creative Coder'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Enhanced Particle Config
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: ["#00f3ff", "#ff00ff", "#ffdd57"] },
        shape: { type: "circle" },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        }
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Progress bar animation for skills
const skillCards = document.querySelectorAll('.skill-card');
const animateProgress = (card) => {
    const progress = card.getAttribute('data-progress');
    const progressBar = card.querySelector('.progress-bar');
    progressBar.style.width = `${progress}%`;
};

// Intersection Observer for skill cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgress(entry.target);
        }
    });
}, { threshold: 0.5 });

skillCards.forEach(card => observer.observe(card));

// Scroll progress indicator
window.addEventListener('scroll', () => {
    const scrollProgress = document.createElement('div');
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.width = `${scrolled}%`;
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Stats counter animation
const stats = document.querySelectorAll('.stat-number');
const animateStats = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.dataset.count);
        let count = 0;
        const increment = target / 50;
        
        const updateCount = () => {
            if (count < target) {
                count += increment;
                stat.textContent = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCount();
    });
};

// Intersection Observer for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
});

document.querySelector('.stats-grid').forEach(stat => statsObserver.observe(stat));

// Form handling with validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    try {
        // Add your form submission logic here
        await submitForm(data);
        showNotification('Message sent successfully!', 'success');
        contactForm.reset();
    } catch (error) {
        showNotification('Failed to send message. Please try again.', 'error');
    }
});

// Notification system
const showNotification = (message, type) => {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
};

// Parallax Effect
document.addEventListener('mousemove', (e) => {
  const elements = document.querySelectorAll('.parallax');
  elements.forEach(element => {
      const speed = 5;
      const x = (window.innerWidth - e.pageX * speed)/100;
      const y = (window.innerHeight - e.pageY * speed)/100;
      element.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

// 3D Hover Effects
document.querySelectorAll('.hover-3d').forEach(item => {
  item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.transform = `perspective(1000px) rotateX(${y/10}deg) rotateY(${-x/10}deg)`;
  });
  
  item.addEventListener('mouseleave', () => {
      item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
});