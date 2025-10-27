import confetti from 'canvas-confetti';

const navButtons = document.querySelectorAll('.nav-button');

function handleNavClick(event, withConfetti = false) {
  // Prevent the link from navigating immediately
  event.preventDefault();
  const button = event.currentTarget;

  if (withConfetti) {
    // Launch the confetti
    confetti();
  }

  // Add fade-out class to the body
  document.body.classList.add('page-fade-out');

  // After the animation, navigate to the new page
  setTimeout(() => {
    window.location.href = button.dataset.href;
  }, 500);
}

navButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    // Check if the button is the contact button
    const withConfetti = button.classList.contains('contact-button');
    handleNavClick(event, withConfetti);
  });
});