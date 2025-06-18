document.addEventListener('DOMContentLoaded', () => {
  
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const fullName = contactForm.fullname.value.trim();
      const email = contactForm.email.value.trim();
      const service = contactForm.service.value;
      const message = contactForm.message.value.trim();
      const subscribe = contactForm.subscribe.checked;

      const formData = {
        fullName,
        email,
        service,
        message,
        subscribe
      };

      localStorage.setItem('contactFormData', JSON.stringify(formData));

      // ✅ Redirect after saving
      window.location.href = "thankyou.html";
    });
  }

  // (other code for carousel and services remains unchanged...)
});

  // Carousel logic
  const imagePaths = [
    "/project/images/profile-image.jpg",
    "/project/images/profile-image3.jpg"
  ];
  let currentImageIndex = 0;
  const carouselImage = document.getElementById('carousel-image');

  if (carouselImage) {
    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
      carouselImage.src = imagePaths[currentImageIndex];
    }, 3000);
  }

  // Services array
  const services = [
    {
      icon: "bx bx-palette",
      title: "Product Branding",
      description: "I help businesses build a strong identity for their products through strategic branding. This includes developing a compelling brand name, logo, packaging, messaging, and visual style."
    },
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
    }
  ];

  // Render services dynamically
  const container = document.getElementById("services-container");
  if (container) {
    services.forEach(service => {
      const box = document.createElement("div");
      box.className = "services-box";

      box.innerHTML = `
        <div class="icon">
          <i class="${service.icon}"></i>
          <a href="#"><i class='bxr bx-arrow-left-stroke-circle'></i></a>
        </div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      `;

      container.appendChild(box);
    });
  }
});

//Toggle the options on the my experience page
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const resumeDetails = document.querySelectorAll('.resume-detail');

    resumeBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');

    resumeDetails.forEach(detail => {
      detail.classList.remove('active');
    });
    resumeDetails[idx].classList.add('active');

  });

});

// Set current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;
