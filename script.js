document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.category-card');
    
    const cardWidth = cards[0].offsetWidth + 10; // Get the width of a card (including margin)
    const totalCards = cards.length;
    
    // Clone cards for seamless looping
    cards.forEach(card => {
      track.appendChild(card.cloneNode(true)); // Clone each card and append to the track
    });
  
    let currentPosition = 0;
  
    // Move the carousel every 50ms (this can be adjusted to speed up or slow down)
    setInterval(() => {
      // Move the track to the left by the width of one card
      currentPosition -= cardWidth;
  
      // Update the transform property to move the cards
      track.style.transform = `translateX(${currentPosition}px)`;
  
      // When the first card has passed out of view, reset its position to the end
      if (currentPosition <= -cardWidth * totalCards) {
        currentPosition = 0;
        track.appendChild(track.firstElementChild); // Move the first card to the end
      }
    }, 50); // Adjust this time for speed
  });
  