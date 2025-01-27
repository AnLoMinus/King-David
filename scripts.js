document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add animation class to cards when they come into view
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".booth-card").forEach((card) => {
    observer.observe(card);
  });

  // Add scroll animations for sections
  const animateSections = () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              section.classList.add("animate-fade-up");
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(section);
    });
  };

  // Initialize animations
  animateSections();

  // Add smooth hover effect for gallery images
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("mouseover", function () {
      this.style.transition = "transform 0.3s ease";
    });
  });
});
