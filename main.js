import confetti from 'canvas-confetti';

const contactButton = document.querySelector('.contact-button');

if (contactButton) {
  contactButton.addEventListener('click', (event) => {
    // Prevent the link from navigating immediately
    event.preventDefault();

    // Launch the confetti
    confetti();

    // Add fade-out class to the body
    document.body.classList.add('page-fade-out');

    // After the animation, navigate to the contact page
    setTimeout(() => {
      window.location.href = contactButton.dataset.href;
    }, 500);
  });
}