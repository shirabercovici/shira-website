import confetti from 'canvas-confetti';

const pageNavButtons = document.querySelectorAll('.nav-button:not(.contact-button)');
const contactLinks = document.querySelectorAll('a[href="#contact"]');

function handlePageNav(event) {
  // Prevent the link from navigating immediately
  event.preventDefault();
  const button = event.currentTarget;

  // Add fade-out class to the body
  document.body.classList.add('page-fade-out');

  // After the animation, navigate to the new page
  setTimeout(() => {
    window.location.href = button.dataset.href;
  }, 500);
}

function handleContactClick(event) {
    // Only prevent default if it's a link, to allow smooth scroll
    event.preventDefault();
    const link = event.currentTarget;

    if (link.classList.contains('contact-button')) {
      confetti();
    }

    // Add a short delay before scrolling to make it feel smoother
    setTimeout(() => {
      document.querySelector(link.hash)?.scrollIntoView({ behavior: 'smooth' });
    }, 80); // 100ms delay
}

contactLinks.forEach(link => link.addEventListener('click', handleContactClick));

pageNavButtons.forEach(button => button.addEventListener('click', handlePageNav));