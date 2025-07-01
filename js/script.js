document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Tambahkan ke script.js
function revealOnScroll() {
  const fadeElems = document.querySelectorAll('.fade-up');
  fadeElems.forEach(elem => {
    const rect = elem.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      elem.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // untuk langsung tampil jika sudah di viewport

    // Check if we are on the menu page (menu.html)
    if (document.querySelector('.menu-section')) {
        const orderButtons = document.querySelectorAll('.order-btn');
        orderButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const menuItem = e.target.closest('.menu-item');
                const itemName = menuItem.getAttribute('data-name');
                const itemPrice = menuItem.getAttribute('data-price');

                // Save ordered item to localStorage
                let orders = JSON.parse(localStorage.getItem('orders')) || [];
                const existingItem = orders.find(item => item.name === itemName);

                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    orders.push({ name: itemName, price: itemPrice, quantity: 1 });
                }
                    localStorage.setItem('orders', JSON.stringify(orders));
                    
                // Show notification with smooth fade-in and fade-out
                const notification = document.createElement('div');
                notification.className = 'order-notification';
                notification.textContent = `You have successfully ordered: ${itemName}`;
                document.body.appendChild(notification);

                // Animate notification
                setTimeout(() => {
                    notification.classList.add('visible');
                }, 10);

                // Remove notification after 2 seconds and redirect to checkout
                setTimeout(() => {
                    notification.classList.remove('visible');
                    setTimeout(() => {
                        notification.remove();
                    }, 300);
                }, 2000);
            });
        });

        // Cart button to navigate to checkout page
        const openCheckoutBtn = document.getElementById('open-checkout-btn');
        if (openCheckoutBtn) {
            openCheckoutBtn.addEventListener('click', () => {
                window.location.href = 'checkout.html';
            });
        }
    }

    // Check if we are on the index page (index.html)
    if (document.getElementById('lets-order-btn')) {
        const letsOrderBtn = document.getElementById('lets-order-btn');
        letsOrderBtn.addEventListener('click', () => {
            window.location.href = 'menu.html#food-menu';
        });
    }

    // Hero animation saat halaman dibuka
const heroContent = document.querySelector('.hero-content');
const heroImages = document.querySelector('.hero-images');

setTimeout(() => {
    if (heroContent) heroContent.classList.add('animate');
    if (heroImages) heroImages.classList.add('animate');

    // Jalankan animasi slide-in tiap kalimat
    const spans = heroContent.querySelectorAll('p span');
    spans.forEach(span => {
        span.style.animationPlayState = 'running';
    });
}, 400);
});

// Smooth scroll to section
window.scrollToSection = function (sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
