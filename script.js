document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const leftLinks = document.querySelector('.nav-left');
    const rightLinks = document.querySelector('.nav-right');
    
    if (hamburger && leftLinks && rightLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle both navigation groups
            leftLinks.classList.toggle('active');
            rightLinks.classList.toggle('active');
            
            // Toggle hamburger icon
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                leftLinks.classList.remove('active');
                rightLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Smooth Scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Skip if the link is just a # (empty anchor)
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Calculate header height to offset scroll position
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && !e.target.closest('.hamburger')) {
            leftLinks.classList.remove('active');
            rightLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});
// Testimonial Slider
document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.slider-arrow.prev'); // Previous button
  const nextBtn = document.querySelector('.slider-arrow1.next'); // Next button (updated class)
  const slider = document.querySelector('.testimonial-slider'); // Slider container
  const slides = document.querySelectorAll('.testimonial, .testimonial1, .testimonial2'); // All slides
  let currentIndex = 0;

  if (!slider || !slides.length) return;

  // Function to scroll to the current slide
  const goToSlide = (index) => {
    const slide = slides[index];
    slide.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
    currentIndex = index;
  };

  // Previous button
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    goToSlide(currentIndex);
  });

  // Next button
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    goToSlide(currentIndex);
  });

});

// FAQ Accordion
// Accordion (Single Implementation)
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;
            const icon = header.querySelector('i');

            // Close all other items
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem) {
                    item.querySelector('.accordion-content').classList.remove('active');
                    const otherIcon = item.querySelector('i');
                    if (otherIcon) {
                        otherIcon.classList.replace('fa-minus', 'fa-plus');
                    }
                }
            });

            // Toggle current item
            accordionContent.classList.toggle('active');
            if (icon) {
                icon.classList.toggle('fa-plus');
                icon.classList.toggle('fa-minus');
            }
        });
    });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});