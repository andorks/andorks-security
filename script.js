const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function showNextTestimonial() {
  testimonials[index].classList.remove('active');
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add('active');
}

setInterval(showNextTestimonial, 4000);

// Contact form logic
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting us!');
  form.reset();
});
