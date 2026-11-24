// Form Submission Handling
document.addEventListener('DOMContentLoaded', () => {
const contactForm = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');

if (contactForm) {
contactForm.addEventListener('submit', (e) => {
// Prevent default page reload
e.preventDefault();
 
 // Display success feedback message
  if (formAlert) {
    formAlert.classList.remove('d-none');
  }

  // Reset form fields
  contactForm.reset();

  // Automatically hide feedback after 5 seconds
  setTimeout(() => {
    if (formAlert) {
      formAlert.classList.add('d-none');
    }
  }, 5000);
});
}
});
