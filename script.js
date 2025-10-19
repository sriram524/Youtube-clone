// ==========================================
// LIKE BUTTON TOGGLE FUNCTIONALITY
// ==========================================

/**
 * This script handles the like button toggle functionality.
 * When clicked, the button switches between "Like" and "Liked" states.
 */

// Wait for the DOM (HTML) to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Select all like buttons on the page
    const likeButtons = document.querySelectorAll('.like-btn');
    
    // Loop through each like button and add click event listener
    likeButtons.forEach(function(button) {
        
        // Add click event to each button
        button.addEventListener('click', function(event) {
            // Prevent card click from triggering (event bubbling)
            event.stopPropagation();
            
            // Get current liked state from data attribute
            const isLiked = button.getAttribute('data-liked') === 'true';
            
            // Toggle the liked state
            if (isLiked) {
                // Currently liked -> change to not liked
                button.textContent = '👍 Like';
                button.setAttribute('data-liked', 'false');
                button.classList.remove('liked'); // Remove red background
            } else {
                // Currently not liked -> change to liked
                button.textContent = '❤️ Liked';
                button.setAttribute('data-liked', 'true');
                button.classList.add('liked'); // Add red background
            }
        });
    });
    
    // ==========================================
    // OPTIONAL: VIDEO CARD CLICK FUNCTIONALITY
    // ==========================================
    
    /**
     * This adds a click handler to video cards.
     * In a real app, this would navigate to the video page.
     */
    
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(function(card) {
        card.addEventListener('click', function() {
            // Get the video title from this card
            const videoTitle = card.querySelector('.video-title').textContent;
            
            // Show an alert (in real app, would navigate to video page)
            alert('Playing: ' + videoTitle);
            
            // In a real YouTube clone, you would do:
            // window.location.href = 'watch.html?v=videoID';
        });
    });
    
    // ==========================================
    // CONSOLE MESSAGE FOR DEBUGGING
    // ==========================================
    
    console.log('YouTube Clone loaded successfully!');
    console.log('Total videos:', videoCards.length);
    console.log('Total like buttons:', likeButtons.length);
});

// ==========================================
// ADDITIONAL FEATURES (OPTIONAL)
// ==========================================

/**
 * You can add more functionality here, such as:
 * - Search functionality
 * - Filter videos by category
 * - Add to watch later
 * - Subscribe button
 * - Comments section
 * - Video player
 */
