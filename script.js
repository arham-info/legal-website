// Basic interactivity for the legal website

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple sticky header effect on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.padding = '10px 0';
                header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            } else {
                header.style.padding = '20px 0';
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }
        }
    });

    // Mock dashboard link
    const dashboardLink = document.querySelector('a[href="#dashboard"]');
    if (dashboardLink) {
        dashboardLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Dashboard feature coming soon! You will be able to track your cases here.');
        });
    }

    // Search interactivity
    const searchBtn = document.querySelector('.search-box .btn');
    const searchInput = document.querySelector('.search-box input');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value;
            if (query) {
                alert(`Searching for: ${query} on Legal and Vakil\nConnecting you with verified experts...`);
            } else {
                alert('Please enter a service or lawyer name to search.');
            }
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-question i');
            
            // Close others
            faqItems.forEach(other => {
                if (other !== item) {
                    other.querySelector('.faq-answer').style.display = 'none';
                    other.querySelector('.faq-question i').className = 'fas fa-chevron-down';
                }
            });

            // Toggle current
            if (answer) {
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                    if (icon) icon.className = 'fas fa-chevron-down';
                } else {
                    answer.style.display = 'block';
                    if (icon) icon.className = 'fas fa-chevron-up';
                }
            }
        });
    });
});
