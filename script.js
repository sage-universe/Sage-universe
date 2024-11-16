// Reveal Sections on Scroll
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const triggerHeight = window.innerHeight * 0.75;
  
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerHeight) {
        section.classList.add("visible");
      }
    });
  });
  