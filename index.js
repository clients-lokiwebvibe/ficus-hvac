// Content Configuration
const siteContent = {
    gallery: [
        { src: "Images/g1.png", alt: "HVAC Installation Project 1" },
        { src: "Images/g2.png", alt: "HVAC Maintenance Work" },
        { src: "Images/g3.png", alt: "Commercial HVAC System" },
        { src: "Images/g4.jpg", alt: "Industrial Ventilation" },
        { src: "Images/g5.jpg", alt: "Clean Room Installation" },
        { src: "Images/g6.jpg", alt: "Green Building Project" }
    ],
    company: {
        name: "FICUS HVAC",
        tagline: "HVAC Solution Providers",
        description: "FICUS HVAC delivering premium solutions for residential and commercial clients, ensuring year-round comfort with eco-friendly systems. A trusted partner for personalized HVAC services.",
        establishedYear: 2024
    },
    whyChooseUs: [
        {
            title: "HVAC Solution Providers",
            description: "Our professional engineers bring years of knowledge and experience to every project, ensuring installation as per engineering standards to avoid major service failures for your HVAC systems.",
            image: "Images/w1.jpg"
        },
        {
            title: "Energy Efficiency",
            description: "We focus on cutting-edge, energy-efficient, value engineering HVAC solutions that help you save on energy costs while reducing your carbon footprint.",
            image: "Images/w2.jpg"
        },
        {
            title: "Customer Satisfaction",
            description: "Your comfort is our priority. We provide customized solutions, prompt support, and reliable service to ensure your complete satisfaction.",
            image: "Images/w3.jpg"
        }
    ],
    visionMission: {
        vision: "The company's long term vision is to be more creative, understanding and more customers centric thus developing a long and healthy working relationship",
        mission: "FICUS HVAC aims to design, detailed engineering, install, service, and maintain cost effective, customized modern Heating, Ventilation, Air conditioning services to all our clients at affordable cost."
    },
    about: {
        title: "About FICUS HVAC",
        content: [
            `FICUS HVAC has been established in ${new Date().getFullYear()} with a vision of raising the bar of excellence and providing quality services in Heating, Ventilation and Air Conditioning field.`,
            "Mr.P.Arumugam - CEO (Engineering Graduate from BITS, Pilani) has been instrumental to establish this organization as he has been a vast experience of around 24 years in all sectors in terms of design, detailed engineering, Execution, Testing and Commissioning (Commercial Buildings – Low side Interior Fit out projects with Fast Track mechanism & High Side works, Industrial Projects like Atomic & Thermal Power Plants, Steel Manufacturing Plants, Pharmaceuticals, Highly Critical projects like Clean Rooms, Bio Labs etc, Retro Fit-out works etc., ) in the HVAC industry."
        ]
    },
    services: [
        {
            title: "AIR CONDITIONING",
            icon: "bi-wind",
            description: "Efficient temperature control systems providing comfortable indoor environments while optimizing energy usage in buildings."
        },
        {
            title: "DRY VENTILATION",
            icon: "bi-fan",
            description: "Advanced airflow management system that removes moisture and maintains optimal air quality throughout spaces."
        },
        {
            title: "EVAPORATIVE COOLING",
            icon: "bi-droplet-half",
            description: "Natural cooling solution that uses water evaporation to reduce temperatures efficiently and economically."
        },
        {
            title: "CLEAN ROOMS & BIO SAFETY LABS",
            icon: "bi-shield-check",
            description: "Specialized environments with controlled air quality and filtration for sensitive research and manufacturing."
        },
        {
            title: "HEATING SYSTEM",
            icon: "bi-thermometer-high",
            description: "Comprehensive heating solutions delivering consistent warmth while maintaining energy efficiency across building spaces."
        },
        {
            title: "GREEN BUILDING / LEED COMPATIBILITY",
            icon: "bi-house",
            description: "Environmentally conscious building solutions that meet sustainability standards and reduce environmental impact effectively."
        },
        {
            title: "FIREFIGHTING SYSTEM",
            icon: "bi-fire",
            description: "Advanced fire detection and suppression technology protecting lives and assets with rapid response."
        },
        {
            title: "PLC & BUILDING MANAGEMENT SYSTEM",
            icon: "bi-sliders",
            description: "Smart automation controls integrating multiple building systems for optimal performance and efficient operation."
        },
        {
            title: "LOW HUMIDITY SYSTEM",
            icon: "bi-droplet",
            description: "Precision moisture control technology maintaining ideal humidity levels for sensitive equipment and materials."
        }
    ],
    contact: {
        address: "#4/81a - 1st floor, 1st Street, Balaji Nagar, Pozhichalur, Chennai - 600 074",
        mobile: "+91 97899 00325",
        emails: {
            sales: "sales@ficushvac.com",
            personal: "arumugam@ficushvac.com",
            info: "info@ficushvac.com"
        },
        businessHours: {
            weekdays: "Monday - Saturday: 9:00 AM - 6:30 PM",
            sunday: "Sunday: Closed"
        }
    }
};

// DOM Content Loading
document.addEventListener('DOMContentLoaded', () => {
    initializeContent();
    setupEventListeners();
    initializeAnimations();
});

// Content Initialization
function initializeContent() {
    populateCompanyInfo();
    populateWhyChooseUs();
    populateVisionMission();
    populateAbout();
    populateServices();
    populateGallery();
    populateContact();
    updateCopyrightYear();
}

// Content Population Functions
function populateCompanyInfo() {
    const { name, description } = siteContent.company;
    document.querySelector('.navbar-brand span').textContent = name;
    document.querySelector('footer h2').textContent = name;
    document.querySelector('footer .col-md-4 p').textContent = description;
}

function populateWhyChooseUs() {
    const container = document.querySelector('#why-choose-us .row');
    container.innerHTML = siteContent.whyChooseUs.map((item, index) => `
        <div class="row align-items-center mb-4 ${index % 2 === 0 ? 'animate fade-in-left' : 'animate fade-in-right'}">
            <div class="col-md-6 ${index % 2 === 1 ? 'order-md-2' : ''}">
                <img src="${item.image}" alt="${item.title}" class="img-fluid rounded shadow">
            </div>
            <div class="col-md-6 ${index % 2 === 1 ? 'order-md-1' : ''}">
                <h4 class="mb-3">${item.title}</h4>
                <p style="color: whitesmoke;">${item.description}</p>
            </div>
        </div>
    `).join('');
}

function populateVisionMission() {
    const { vision, mission } = siteContent.visionMission;
    document.querySelector('.vision-text').textContent = vision;
    document.querySelector('.mission-text').textContent = mission;
}

function populateAbout() {
    const { title, content } = siteContent.about;
    document.querySelector('#about h2').textContent = title;
    document.querySelector('#about-content').innerHTML = content.map(
        paragraph => `<p class="animate fade-in">${paragraph}</p>`
    ).join('');
}

function populateServices() {
    const container = document.querySelector('#services .row');
    container.innerHTML = siteContent.services.map(service => `
        <div class="col-md-4 mb-4">
            <div class="card card-hover text-center p-4 animate fade-in-left">
                <i class="bi ${service.icon} fs-1 mb-3 zoom-in animate"></i>
                <h4 class="animate fade-in">${service.title}</h4>
                <p class="animate fade-in">${service.description}</p>
            </div>
        </div>
    `).join('');
}

function populateGallery() {
    const container = document.querySelector('.gallery-container');
    const galleryHTML = siteContent.gallery.map((item, index) => `
        <div class="col-md-4 mb-4">
            <div class="zoom-in animate">
                <img src="${item.src}" class="img-fluid" alt="${item.alt}">
            </div>
        </div>
    `).join('');
    container.innerHTML = galleryHTML;
}

function populateContact() {
    const { address, mobile, emails, businessHours } = siteContent.contact;
    
    // Business Hours
    const businessHoursContainer = document.querySelector('.business-hours');
    businessHoursContainer.innerHTML = `
        <li>${businessHours.weekdays}</li>
        <li>${businessHours.sunday}</li>
    `;

    // Contact Info
    const contactContainer = document.querySelector('.contact-info');
    contactContainer.innerHTML = `
        <li><i class="bi bi-geo-alt-fill text-danger me-2"></i><strong>Address: </strong>${address}</li>
        <li><i class="bi bi-telephone-fill text-success me-2"></i><strong>Mobile: </strong>${mobile}</li>
        <li><i class="bi bi-envelope-fill text-primary me-2"></i><strong>Enquiries: </strong>${emails.sales} <strong>or</strong> <br> ${emails.personal}</li>
        <li><i class="bi bi-envelope text-primary me-2"></i><strong>Others: </strong>${emails.info}</li>
    `;
}

// Animation and Interaction
function initializeAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate').forEach(element => observer.observe(element));
}

// Event Listeners
function setupEventListeners() {
    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility Functions
function updateCopyrightYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});
