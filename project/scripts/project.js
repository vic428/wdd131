document.addEventListener('DOMContentLoaded', () => {
  // === Form Submission Logic ===
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const fullName = contactForm.fullname.value.trim();
      const email = contactForm.email.value.trim();
      const service = contactForm.service.value;
      const message = contactForm.message.value.trim();
      const subscribe = contactForm.subscribe.checked;

      const formData = { fullName, email, service, message, subscribe };
      localStorage.setItem('contactFormData', JSON.stringify(formData));
      window.location.href = "thankyou.html";
    });
  }

  // === Carousel Logic ===
  const imagePaths = [
  "images/profile-image.jpg",
  "images/profile-image3.jpg"
];
  let currentImageIndex = 0;
  const carouselImage = document.getElementById('carousel-image');
  if (carouselImage) {
    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
      carouselImage.src = imagePaths[currentImageIndex];
    }, 3000);
  }

  // === Resume Button Toggle ===
  const resumeBtns = document.querySelectorAll('.resume-btn');
  resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      const resumeDetails = document.querySelectorAll('.resume-detail');
      resumeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      resumeDetails.forEach(detail => detail.classList.remove('active'));
      resumeDetails[idx].classList.add('active');
    });
  });

  // === Footer Info ===
  const yearEl = document.getElementById("currentyear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const lastModifiedEl = document.getElementById("lastModified");
  if (lastModifiedEl) lastModifiedEl.textContent = "Last Modified: " + document.lastModified;

  // === Services Rendering ===
  const services = [
    {
      icon: "bx bx-computer",
      title: "Web Development",
      description: "I design and build responsive, user-friendly websites aligned with your brand. From portfolios to e-commerce platforms, your site will be fast and mobile-optimized."
    },
    {
      icon: "bx bx-chart-trend",
      title: "SEO",
      description: "I optimize websites for search engines, covering on-page SEO, keyword research, content tuning, and technical enhancements for better rankings."
    },
    {
      icon: "bx bx-cog",
      title: "Website Maintenance",
      description: "I offer ongoing maintenance including updates, backups, security checks, and performance monitoring to keep your site secure and functional."
    },
    {
      icon: "bx bx-toggles",
      title: "API Integration",
      description: "I integrate third-party APIs like CRMs, payment gateways, or social logins to expand functionality and create seamless user experiences."
    },
    {
      icon: "bx bx-analyze",
      title: "Google Analytics & Tag Setup",
      description: "I implement Google Analytics and Tag Manager to track user behavior, conversions, and campaign performance effectively."
    },
    {
      icon: "bx bx-paint",
      title: "Product Branding",
      description: "I help define your brand identity through cohesive visual elements, brand voice, logo design, and packaging that resonates with your target audience."
    }
  ];

  const container = document.getElementById("services-container");
  if (container) {
    services.forEach(service => {
      const box = document.createElement("div");
      box.className = "services-box";
      box.innerHTML = `
        <div class="icon">
          <i class="${service.icon}"></i>
          <a href="index.html"><i class='bxr bx-arrow-left-stroke-circle'></i></a>
        </div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      `;
      container.appendChild(box);
    });
  }
});
