// Basic interactivity for the legal website

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Sticky header effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 30) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        }
    });

    // Reveal animations
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };
    const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-question i');
            faqItems.forEach(other => {
                if (other !== item) {
                    const otherAnswer = other.querySelector('.faq-answer');
                    if (otherAnswer) otherAnswer.style.display = 'none';
                    const otherIcon = other.querySelector('.faq-question i');
                    if (otherIcon) otherIcon.className = 'fas fa-chevron-down';
                }
            });
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

    // Mobile Menu
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navBtns = document.querySelector('.nav-btns');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navBtns.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
    }

    // --- Data ---
    const serviceData = {
        'business': { title: 'Business Setup', category: 'startup', icon: 'fas fa-building', shortDesc: 'Pvt Ltd, LLP, and OPC registration.', subtitle: 'Start your entrepreneurial journey with zero hassle.', desc: 'End-to-end solutions for setting up your business in India.', benefits: ['DSC', 'DIN', 'PAN & TAN'], faqs: [{q:'How long?', a:'10-15 days'}] },
        'trademark': { title: 'Trademark & IP', category: 'startup', icon: 'fas fa-file-signature', shortDesc: 'Logo and patent filings.', subtitle: 'Protect your brand identity.', desc: 'Full intellectual property protection services.', benefits: ['Search Report', 'Filing', 'Copyright'], faqs: [{q:'Why?', a:'Exclusivity'}] },
        'tax': { title: 'Tax & Compliance', category: 'tax', icon: 'fas fa-calculator', shortDesc: 'GST and Income Tax returns.', subtitle: 'Expert tax filing for peace of mind.', desc: 'Monthly/Quarterly filings and ROC compliance.', benefits: ['GST', 'ITR', 'TDS'], faqs: [{q:'Deadlines?', a:'Varies by return'}] },
        'legal-talk': { title: 'Legal Talk', category: 'legal', icon: 'fas fa-gavel', shortDesc: 'Consult with top lawyers.', subtitle: 'Instant access to legal minds.', desc: 'Actionable legal advice from verified experts.', benefits: ['Verified Experts', 'Confidential', 'Actionable'], faqs: [{q:'Booking?', a:'Select slot'}] },
        'property': { title: 'Property Matters', category: 'legal', icon: 'fas fa-home', shortDesc: 'Real estate documentation.', subtitle: 'Secure your investments.', desc: 'Title verification and registration support.', benefits: ['Verification', 'Sale Deed', 'RERA'], faqs: [{q:'Title?', a:'Ensures ownership'}] },
        'personal': { title: 'Personal Legal', category: 'legal', icon: 'fas fa-user-shield', shortDesc: 'Family and criminal law.', subtitle: 'Sensitive legal support.', desc: 'Handling family and personal disputes professionally.', benefits: ['Divorce', 'Wills', 'Consumer'], faqs: [{q:'Will?', a:'Legally valid drafting'}] }
    };

    const expertData = {
        'vikram': { id: 'vikram', name: 'Adv. Vikram Sethi', specialty: 'Corporate Law', expYears: 15, subtitle: 'Corporate Law | 15+ Yrs Exp', rating: 5, consults: '850+', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200' },
        'neha': { id: 'neha', name: 'CA Neha Gupta', specialty: 'Taxation', expYears: 10, subtitle: 'Taxation & GST | 10+ Yrs Exp', rating: 4.5, consults: '1200+', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' },
        'rajesh': { id: 'rajesh', name: 'Adv. Rajesh Mehra', specialty: 'Property Law', expYears: 20, subtitle: 'Property & Civil | 20+ Yrs Exp', rating: 5, consults: '2500+', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200' },
        'anjali': { id: 'anjali', name: 'CS Anjali Verma', specialty: 'Compliance', expYears: 8, subtitle: 'Compliance | 8+ Yrs Exp', rating: 5, consults: '600+', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200' },
        'karan': { id: 'karan', name: 'Adv. Karan Khanna', specialty: 'Criminal Law', expYears: 12, subtitle: 'Criminal Defense | 12+ Yrs Exp', rating: 4.8, consults: '420+', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
        'meera': { id: 'meera', name: 'Adv. Meera Iyer', specialty: 'Family Law', expYears: 9, subtitle: 'Family Law | 9+ Yrs Exp', rating: 4.9, consults: '310+', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
        'saurabh': { id: 'saurabh', name: 'CA Saurabh Jain', specialty: 'Taxation', expYears: 14, subtitle: 'Audit & Tax | 14+ Yrs Exp', rating: 4.7, consults: '580+', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
        'prateek': { id: 'prateek', name: 'Adv. Prateek Sharma', specialty: 'Consumer Court', expYears: 7, subtitle: 'Consumer Rights | 7+ Yrs Exp', rating: 4.6, consults: '190+', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' },
        'ridhi': { id: 'ridhi', name: 'CS Ridhi Shah', specialty: 'Compliance', expYears: 6, subtitle: 'Corporate Compliance | 6+ Yrs Exp', rating: 5, consults: '150+', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200' },
        'arjun': { id: 'arjun', name: 'Adv. Arjun Das', specialty: 'Property Law', expYears: 18, subtitle: 'Real Estate Law | 18+ Yrs Exp', rating: 4.8, consults: '760+', img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=200' }
    };

    // --- Rendering Functions ---
    function renderServicesGrid(filter = 'all', search = '') {
        const container = document.getElementById('services-container');
        if (!container) return;
        const categories = { 'startup': 'Registration & Startup', 'tax': 'Tax & Accounting', 'legal': 'Personal Legal & Property' };
        let html = '';
        for (const [catKey, catName] of Object.entries(categories)) {
            const services = Object.entries(serviceData).filter(([key, data]) => {
                const matchesFilter = filter === 'all' || data.category === filter;
                const matchesSearch = data.title.toLowerCase().includes(search.toLowerCase());
                return data.category === catKey && matchesFilter && matchesSearch;
            });
            if (services.length > 0) {
                html += `<div class="service-category"><div class="service-category-head"><h2>${catName}</h2></div><div class="grid-3">`;
                html += services.map(([key, data]) => `
                    <div class="service-card reveal">
                        <i class="${data.icon}"></i>
                        <h3>${data.title}</h3>
                        <p>${data.shortDesc}</p>
                        <a href="service-details.html?service=${key}" style="color: var(--secondary); font-weight: 600;">Learn More →</a>
                    </div>`).join('');
                html += `</div></div>`;
            }
        }
        container.innerHTML = html || '<p>No services found.</p>';
        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }

    function renderExpertsGrid() {
        const container = document.getElementById('experts-container');
        if (!container) return;
        const search = document.getElementById('expert-search')?.value.toLowerCase() || '';
        const specialty = document.getElementById('expert-specialty')?.value || 'all';
        const experts = Object.values(expertData).filter(ex => {
            return (specialty === 'all' || ex.specialty === specialty) && ex.name.toLowerCase().includes(search);
        });
        container.innerHTML = experts.map(ex => `
            <div class="expert-card reveal">
                <img src="${ex.img}" alt="${ex.name}">
                <div class="rating">
                    ${'<i class="fas fa-star"></i>'.repeat(Math.floor(ex.rating))}
                    ${ex.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                </div>
                <h3>${ex.name}</h3>
                <p>${ex.subtitle}</p>
                <a href="lawyer-details.html?id=${ex.id}" class="btn btn-outline" style="width: 100%;">Book Call</a>
            </div>`).join('') || '<p>No experts found matching your criteria.</p>';
        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }

    // --- Page Specific Initialization ---
    // Instead of relying on URL paths (which can vary in local file protocol), we check for the existence of key containers.
    
    // Services Page
    if (document.getElementById('services-container')) {
        renderServicesGrid();
        document.getElementById('service-search')?.addEventListener('input', (e) => renderServicesGrid('all', e.target.value));
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                renderServicesGrid(tab.dataset.category, document.getElementById('service-search')?.value || '');
            });
        });
    }

    // Lawyers Page
    if (document.getElementById('experts-container')) {
        renderExpertsGrid();
        ['expert-search', 'expert-specialty', 'expert-exp', 'expert-sort'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('input', renderExpertsGrid);
                el.addEventListener('change', renderExpertsGrid);
            }
        });
    }

    // Service Details
    if (document.getElementById('service-title')) {
        const params = new URLSearchParams(window.location.search);
        const data = serviceData[params.get('service')];
        if (data) {
            document.getElementById('service-title').textContent = data.title;
            document.getElementById('service-subtitle').textContent = data.subtitle;
            document.getElementById('service-desc').textContent = data.desc;
        }
    }

    // Lawyer Details
    if (document.getElementById('expert-name')) {
        const params = new URLSearchParams(window.location.search);
        const data = expertData[params.get('id')];
        if (data) {
            document.getElementById('expert-name').textContent = data.name;
            document.getElementById('expert-subtitle').textContent = data.subtitle;
            document.getElementById('expert-img').src = data.img;
        }
    }
});
