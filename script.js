// Countdown Timer
const targetDate = new Date('2025-12-13T16:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = 'The wedding day has arrived!';
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  document.getElementById('countdown').innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Initialize countdown update every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately upon load

// RSVP Form Handler
document
  .getElementById('rsvpForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const attend = document.getElementById('attend').value;
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !attend) {
      document.getElementById('rsvpMessage').innerText =
        'Please fill out your name and attend status.';
      return;
    }

    // Here, instead of sending an email, we'll just display a thank you message
    document.getElementById('rsvpMessage').innerText =
      `Thank you, ${name}, for your RSVP! We look forward to seeing you.`;

    // Optionally, reset the form
    document.getElementById('rsvpForm').reset();
  });
